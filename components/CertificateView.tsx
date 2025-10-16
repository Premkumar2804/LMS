import React, { useState, useRef } from 'react';
import { CertificateInfo } from '../types';
import { TrophyIcon } from './icons/TrophyIcon';
import { SealIcon } from './icons/SealIcon';
import { WebDevIcon } from './icons/WebDevIcon';
import { PythonIcon } from './icons/PythonIcon';
import { JavaIcon } from './icons/JavaIcon';
import { DownloadIcon } from './icons/DownloadIcon';

// Script loading utility with promise caching to prevent re-fetching
const scriptCache = new Map<string, Promise<void>>();

const loadScript = (src: string): Promise<void> => {
    if (!scriptCache.has(src)) {
        const promise = new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => {
                scriptCache.delete(src); // Allow retry on failure
                reject(new Error(`Failed to load script: ${src}`));
            };
            document.body.appendChild(script);
        });
        scriptCache.set(src, promise);
    }
    return scriptCache.get(src)!;
};

// Fix: Define props for CertificateView component.
interface CertificateViewProps {
  info: CertificateInfo;
  onBack: () => void;
}

// Fix: Define a type for template classes to handle optional properties like innerBorder.
interface TemplateClasses {
    container: string;
    border: string;
    headerText: string;
    bodyText: string;
    nameText: string;
    courseText: string;
    hr: string;
    innerBorder?: React.ReactNode;
}


const CertificateView: React.FC<CertificateViewProps> = ({ info, onBack }) => {
    const [template, setTemplate] = useState<'modern' | 'classic'>('modern');
    const [isDownloading, setIsDownloading] = useState(false);
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleDownloadPdf = async () => {
        const input = certificateRef.current;
        if (!input) {
            console.error("Certificate element not found");
            return;
        }

        setIsDownloading(true);

        try {
            await Promise.all([
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'),
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
            ]);

            const html2canvas = (window as any).html2canvas;
            const jspdf = (window as any).jspdf;

            if (!html2canvas || !jspdf || !jspdf.jsPDF) {
                throw new Error("PDF generation libraries did not load correctly.");
            }

            const canvas = await html2canvas(input, { scale: 2, useCORS: true });
            
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = jspdf;

            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvasAspectRatio = canvas.width / canvas.height;
            
            let finalWidth = pdfWidth;
            let finalHeight = finalWidth / canvasAspectRatio;

            if (finalHeight > pdfHeight) {
                finalHeight = pdfHeight;
                finalWidth = finalHeight * canvasAspectRatio;
            }
            
            const x = (pdfWidth - finalWidth) / 2;
            const y = (pdfHeight - finalHeight) / 2;

            pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
            
            const fileName = `TechLearn_${info.courseTitle.replace(/\s+/g, '-')}_Certificate.pdf`;
            pdf.save(fileName);

        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Sorry, an error occurred while generating the certificate. Please check your network connection and try again.");
        } finally {
            setIsDownloading(false);
        }
    };

    const CourseIcon = () => {
        const iconColor = template === 'classic' ? 'text-[#4a4a4a]' : 'text-gray-500';
        switch (info.courseCategory) {
            case 'Web Development': return <WebDevIcon className={`w-12 h-12 sm:w-16 sm:h-16 ${iconColor}`} />;
            case 'Python': return <PythonIcon className={`w-12 h-12 sm:w-16 sm:h-16 ${iconColor}`} />;
            case 'Java': return <JavaIcon className={`w-12 h-12 sm:w-16 sm:h-16 ${iconColor}`} />;
            default: return <TrophyIcon className={`w-12 h-12 sm:w-16 sm:h-16 ${iconColor}`} />;
        }
    };

    const modernTemplateClasses: TemplateClasses = {
        container: 'bg-white font-sans',
        border: 'border-t-[10px] border-blue-700',
        headerText: 'text-blue-800',
        bodyText: 'text-gray-600',
        nameText: 'text-blue-800',
        courseText: 'text-gray-700',
        hr: 'border-gray-300',
    };

    const classicTemplateClasses: TemplateClasses = {
        container: 'bg-[#fcf8f2] font-serif',
        border: 'border-8 border-double border-[#4a4a4a] p-2',
        innerBorder: <div className="absolute inset-4 border border-[#c7a768]"></div>,
        headerText: 'text-gray-800',
        bodyText: 'text-gray-700',
        nameText: 'text-gray-900',
        courseText: 'text-gray-800',
        hr: 'border-gray-500',
    };
    
    const theme = template === 'modern' ? modernTemplateClasses : classicTemplateClasses;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-2 sm:p-4 animate-fade-in">
        <div ref={certificateRef} className={`w-full max-w-4xl rounded-lg shadow-2xl relative overflow-hidden ${theme.container} ${theme.border}`}>
          {template === 'classic' && theme.innerBorder}
          <div className="relative z-10 p-4 sm:p-8">
            <div className="flex justify-between items-start mb-6 sm:mb-10">
                <div className="text-left">
                    <h3 className={`text-lg sm:text-xl font-bold ${theme.headerText}`}>TechLearn LMS</h3>
                    <p className={`text-xs sm:text-sm ${theme.bodyText}`}>Free Tech Education</p>
                </div>
                 <div className="text-right">
                    <CourseIcon />
                 </div>
            </div>

            <div className="text-center">
                <p className={`text-base sm:text-xl font-semibold mb-2 tracking-widest uppercase ${theme.bodyText}`}>Certificate of Completion</p>
                <p className={`text-sm sm:text-base ${theme.bodyText} mb-4`}>This certificate is proudly presented to</p>
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 break-words ${theme.nameText}`}>
                    {info.studentName}
                </h1>
                <p className={`text-sm sm:text-base ${theme.bodyText} mb-2`}>for successfully completing the course</p>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 ${theme.courseText}`}>
                    {info.courseTitle}
                </h2>
                <div className="flex flex-col sm:flex-row justify-between items-center max-w-lg mx-auto mt-6 sm:mt-10 gap-6 sm:gap-4">
                    <div className="text-center">
                        <p className={`font-bold border-t-2 ${theme.hr} pt-2 px-4 text-sm sm:text-base`}>Date of Completion</p>
                        <p className={`text-xs sm:text-sm ${theme.bodyText}`}>{info.completionDate}</p>
                    </div>

                    {template === 'modern' && (
                        <div className="text-center order-first sm:order-none">
                            <SealIcon className="w-20 h-20 sm:w-24 sm:h-24 text-blue-700" />
                        </div>
                    )}
                    
                    <div className="text-center">
                        <p className={`font-bold border-t-2 ${theme.hr} pt-2 px-4 text-sm sm:text-base`}>Issuing Authority</p>
                        <p className={`text-xs sm:text-sm ${theme.bodyText}`}>TechLearn Prem</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Template Switcher */}
        <div className="mt-6 bg-white p-2 rounded-lg shadow-md flex gap-2">
            <button onClick={() => setTemplate('modern')} className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${template === 'modern' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>Modern</button>
            <button onClick={() => setTemplate('classic')} className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${template === 'classic' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>Classic</button>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <button 
              onClick={onBack} 
              className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-primary-dark transition-colors"
            >
              Back to Dashboard
            </button>
            <button
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-colors disabled:bg-gray-500 disabled:cursor-wait"
            >
                {isDownloading ? (
                    'Downloading...'
                ) : (
                    <>
                        <DownloadIcon className="w-5 h-5" />
                        Download PDF
                    </>
                )}
            </button>
        </div>
    </div>
  );
};

export default CertificateView;