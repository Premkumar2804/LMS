import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 'html-css-js',
    title: 'Web Development Fundamentals',
    description: 'Master the core technologies of the web: HTML, CSS, and JavaScript.',
    longDescription: 'This comprehensive course covers everything you need to start building beautiful, responsive websites. From the basic structure with HTML to styling with CSS and adding interactivity with JavaScript, you will gain hands-on experience through practical exercises.',
    instructor: 'Prem Kumar',
    imageUrl: 'https://picsum.photos/seed/webdev/600/400',
    category: 'Web Development',
    modules: [
      {
        id: 'html-1',
        title: 'HTML Basics: Tags and Elements',
        shortDescription: 'Learn what HTML tags are and how they form the basic building blocks of a web page.',
        longDescription: 'HTML (HyperText Markup Language) is the skeleton of any webpage. It uses tags (like `<h1>`, `<p>`, etc.) to structure content. A tag, its content, and its closing tag together form an element. This first step is crucial for understanding how to organize text, headings, and other content.',
        exampleCode: `<!DOCTYPE html>
<html>
<head>
  <title>Example Page</title>
</head>
<body>
  <h1>This is a Main Heading</h1>
  <p>This is a paragraph of text. It's used for most of the written content on a page.</p>
</body>
</html>`,
        exercise: {
          id: 'ex-html-1',
          title: 'Build a Simple Web Page',
          question: 'Create an HTML page with a main heading "My First Web Page" and a paragraph that says "This is my first paragraph."',
          initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>Your Title</title>
</head>
<body>
  <!-- Your code here -->
</body>
</html>`,
          isCompleted: false,
          hint: 'Remember to use `<h1>` for the main heading and `<p>` for the paragraph.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements'
        },
        quiz: {
          id: 'quiz-html-1',
          questions: [
            { id: 'q1', questionText: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language', 'Hyperlinking Text Manipulation Language'], correctAnswerIndex: 0 },
            { id: 'q2', questionText: 'Which tag is used to define the most important heading?', options: ['<h6>', '<h1>', '<head>', '<heading>'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'What is the correct syntax for a paragraph in HTML?', options: ['<p>...</p>', '<para>...</para>', '<paragraph>...</paragraph>', '{p}...{/p}'], correctAnswerIndex: 0 },
          ]
        }
      },
      {
        id: 'html-2',
        title: 'HTML Lists & Links',
        shortDescription: 'Organize content with ordered and unordered lists, and learn to create hyperlinks to other pages.',
        longDescription: 'Lists are perfect for grouping related items. `<ul>` creates a bulleted (unordered) list, while `<ol>` creates a numbered (ordered) list. Each item in a list uses the `<li>` tag. The `<a>` (anchor) tag is used to create hyperlinks, connecting your page to the rest of the web.',
        exampleCode: `<!DOCTYPE html>
<html>
<body>
  <h2>An Unordered List</h2>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
  </ul>
  <a href="https://www.google.com">This is a link to Google</a>
</body>
</html>`,
        exercise: {
          id: 'ex-html-2',
          title: 'Create a List of Hobbies',
          question: 'Create an unordered list with three of your favorite hobbies. Below the list, add a link to your favorite website.',
          initialCode: `<!DOCTYPE html>
<html>
<body>
  <h1>My Hobbies</h1>
  <!-- Your list here -->

  <!-- Your link here -->
</body>
</html>`,
          isCompleted: false,
          hint: 'Use `<ul>` for the list container and `<li>` for each hobby. For the link, use the `<a href="...">` tag.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul'
        },
        quiz: {
          id: 'quiz-html-2',
          questions: [
            { id: 'q1', questionText: 'Which tag is used to create a hyperlink?', options: ['<link>', '<href>', '<a>', '<url>'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'What is the correct tag for an unordered (bulleted) list?', options: ['<ol>', '<ul>', '<list>', '<li>'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Which attribute specifies the URL of the page the link goes to?', options: ['src', 'link', 'url', 'href'], correctAnswerIndex: 3 },
          ]
        }
      },
       {
        id: 'html-3',
        title: 'HTML Images',
        shortDescription: 'Learn how to embed images into your webpage using the `<img>` tag.',
        longDescription: 'Images make websites visually appealing. The `<img>` tag is used to display images. It\'s a self-closing tag and requires the `src` attribute to specify the image source (URL) and the `alt` attribute to provide alternative text for accessibility.',
        exampleCode: `<!DOCTYPE html>
<html>
<body>
  <h2>A Cute Puppy</h2>
  <img src="https://picsum.photos/id/237/300/200" alt="A black puppy">
</body>
</html>`,
        exercise: {
          id: 'ex-html-3',
          title: 'Display a Picture',
          question: 'Add an image to the page using the URL "https://picsum.photos/id/1025/300/200". Set the alternative text to "A happy dog".',
          initialCode: `<!DOCTYPE html>
<html>
<body>
  <h1>My Favorite Animal</h1>
  <!-- Your image tag here -->
</body>
</html>`,
          isCompleted: false,
          hint: 'Use the `<img src="..." alt="...">` tag. Don\'t forget the `alt` attribute!',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img'
        },
        quiz: {
          id: 'quiz-html-3',
          questions: [
            { id: 'q1', questionText: 'Which attribute is required for an `<img>` tag to display an image?', options: ['alt', 'href', 'src', 'title'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'What is the purpose of the `alt` attribute in an `<img>` tag?', options: ['To provide a title for the image', 'To provide alternative text for screen readers', 'To specify the image alignment', 'To link the image to another page'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Is the `<img>` tag a self-closing tag?', options: ['Yes', 'No', 'Only in XHTML', 'Depends on the browser'], correctAnswerIndex: 0 },
          ]
        }
      },
      {
        id: 'css-1',
        title: 'Introduction to CSS',
        shortDescription: 'Discover how to add styles like color and font size to your HTML elements.',
        longDescription: 'CSS (Cascading Style Sheets) is the language used to style an HTML document. It describes how HTML elements should be displayed. You can add CSS directly in the `<style>` tag within the `<head>` section of your HTML file. A CSS rule consists of a selector (e.g., `h1`) and a declaration block (e.g., `{ color: blue; }`).',
        exampleCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: steelblue;
      font-size: 24px;
    }
    p {
      color: grey;
    }
  </style>
</head>
<body>
  <h1>Styled Heading</h1>
  <p>This paragraph has a different color.</p>
</body>
</html>`,
        exercise: {
          id: 'ex-css-1',
          title: 'Style Your Web Page',
          question: 'Set the background color of the body to `#f0f0f0`, change the `<h1>` heading color to `tomato`, and set the font size of the paragraph to `18px`.',
          initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>Styling</title>
  <style>
    /* Your CSS rules here */
  </style>
</head>
<body>
  <h1>My First Web Page</h1>
  <p>This is a paragraph of text.</p>
</body>
</html>`,
          isCompleted: false,
          hint: 'Create rules for `body`, `h1`, and `p`. Use `background-color`, `color`, and `font-size`.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference'
        },
        quiz: {
          id: 'quiz-css-1',
          questions: [
            { id: 'q1', questionText: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'Which HTML tag is used to define an internal style sheet?', options: ['<script>', '<css>', '<style>', '<link>'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'Which CSS property is used to change the text color of an element?', options: ['text-color', 'font-color', 'color', 'fgcolor'], correctAnswerIndex: 2 },
          ]
        }
      },
       {
        id: 'css-2',
        title: 'The CSS Box Model',
        shortDescription: 'Understand the core concept of the CSS box model: margin, border, padding, and content.',
        longDescription: 'Every element in HTML is a rectangular box. The CSS box model describes this layout. It consists of: the content area, padding (space around content), border (a line around the padding), and margin (space outside the border). Understanding this is key to controlling layout and spacing.',
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
div {
  width: 200px;
  background-color: lightblue;
  border: 5px solid navy;
  padding: 20px;
  margin: 30px;
}
</style>
</head>
<body>
  <div>This is a box. Notice the spacing around it (margin) and inside it (padding).</div>
</body>
</html>`,
        exercise: {
          id: 'ex-css-2',
          title: 'Style a Div',
          question: 'Create a `<div>` element. Give it a `width` of 100%, a `background-color` of `lightgreen`, a `padding` of `15px`, and a solid black `border` that is `2px` thick.',
          initialCode: `<!DOCTYPE html>
<html>
<head>
<style>
div {
  /* Your code here */
}
</style>
</head>
<body>
  <div>I am a styled box!</div>
</body>
</html>`,
          isCompleted: false,
          hint: 'You will need to set the `width`, `background-color`, `padding`, and `border` properties on the `div` selector.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model'
        },
        quiz: {
          id: 'quiz-css-2',
          questions: [
            { id: 'q1', questionText: 'In the CSS Box Model, which property is the space between the content and the border?', options: ['Margin', 'Border', 'Padding', 'Spacing'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'Which property controls the space outside the border?', options: ['Padding', 'Margin', 'Outline', 'Buffer'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Which set of properties is correct for the box model?', options: ['margin, border, padding, content', 'spacing, border, padding, content', 'margin, line, padding, content', 'margin, border, inner-space, content'], correctAnswerIndex: 0 },
          ]
        }
      },
      {
        id: 'css-3',
        title: 'CSS Layout with Flexbox',
        shortDescription: 'Learn the basics of Flexbox to create flexible and responsive layouts.',
        longDescription: 'Flexbox is a powerful layout model that makes it easy to align and distribute items in a container. By setting `display: flex` on a container, you can easily control the alignment, direction, and order of its children. It is essential for building modern, responsive web pages.',
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  justify-content: space-around; /* Distributes items evenly */
  background-color: #f0f0f0;
  padding: 10px;
}
.item {
  background-color: dodgerblue;
  color: white;
  padding: 20px;
}
</style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>`,
        exercise: {
          id: 'ex-css-3',
          title: 'Center an Item',
          question: 'Use Flexbox on the `.container` to center the `.box` element both horizontally and vertically.',
          initialCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  width: 100%;
  height: 200px;
  background-color: lightgray;
  /* Add flex properties here */

}
.box {
  width: 80px;
  height: 80px;
  background-color: crimson;
}
</style>
</head>
<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
</html>`,
          isCompleted: false,
          hint: 'Set `display: flex;` on the container, then use `justify-content: center;` for horizontal alignment and `align-items: center;` for vertical alignment.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox'
        },
        quiz: {
          id: 'quiz-css-3',
          questions: [
            { id: 'q1', questionText: 'To use Flexbox, you must set the container element\'s `display` property to what?', options: ['block', 'inline-flex', 'flexbox', 'flex'], correctAnswerIndex: 3 },
            { id: 'q2', questionText: 'Which Flexbox property aligns items along the main axis?', options: ['align-items', 'justify-content', 'flex-direction', 'align-content'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Which Flexbox property aligns items along the cross axis?', options: ['align-items', 'justify-content', 'flex-wrap', 'align-self'], correctAnswerIndex: 0 },
          ]
        }
      },
      {
        id: 'js-1',
        title: 'JavaScript Introduction',
        shortDescription: 'Write your first JavaScript code to add interactivity to your website.',
        longDescription: 'JavaScript is the programming language of the web. It allows you to create dynamic content, control multimedia, animate images, and much more. You can embed JavaScript directly into your HTML file using the `<script>` tag.',
        exampleCode: `<!DOCTYPE html>
<html>
<body>
  <p id="greeting"></p>
  <script>
    document.getElementById("greeting").innerHTML = "Hello, JavaScript!";
  </script>
</body>
</html>`,
        exercise: {
          id: 'ex-js-1',
          title: 'Change HTML Content',
          question: 'Use JavaScript to find the HTML element with the id "message" and change its content to "JavaScript is fun!".',
          initialCode: `<!DOCTYPE html>
<html>
<body>
  <h1 id="message">Old Content</h1>
  <script>
    // Your code here
  </script>
</body>
</html>`,
          isCompleted: false,
          hint: 'Use `document.getElementById("message")` to select the element, then set its `.innerHTML` property.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById'
        },
        quiz: {
          id: 'quiz-js-1',
          questions: [
            { id: 'q1', questionText: 'Inside which HTML element do we put the JavaScript?', options: ['<javascript>', '<js>', '<script>', '<scripting>'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'How do you select an element with the id "demo"?', options: ['document.getElement("demo")', 'document.getElementById("demo")', 'document.getElementByName("demo")', '#demo'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'How do you write "Hello World" in an alert box?', options: ['alert("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");'], correctAnswerIndex: 0 },
          ]
        }
      },
      {
        id: 'js-2',
        title: 'JavaScript Variables',
        shortDescription: 'Learn how to store and use data in JavaScript using variables.',
        longDescription: 'Variables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, or `const`. They can hold different data types like numbers, strings, and booleans. Using variables makes your code more readable and reusable.',
        exampleCode: `<!DOCTYPE html>
<html>
<body>
  <p id="result"></p>
  <script>
    let x = 5;
    let y = 10;
    let z = x + y;
    document.getElementById("result").innerHTML = "The value of z is: " + z;
  </script>
</body>
</html>`,
        exercise: {
          id: 'ex-js-2',
          title: 'Create and Use Variables',
          question: 'Declare a variable named `name` and assign it your name (as a string). Then, change the content of the `p` tag with id "welcome" to "Welcome, [Your Name]!".',
          initialCode: `<!DOCTYPE html>
<html>
<body>
  <p id="welcome"></p>
  <script>
    // Your code here
  </script>
</body>
</html>`,
          isCompleted: false,
          hint: 'Declare the variable with `let name = "Your Name";`. Then select the element and set its `innerHTML` by concatenating the string "Welcome, " with your variable.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations'
        },
        quiz: {
          id: 'quiz-js-2',
          questions: [
            { id: 'q1', questionText: 'How do you declare a JavaScript variable?', options: ['v carName;', 'variable carName;', 'var carName;', 'string carName;'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'Which operator is used to assign a value to a variable?', options: ['=', ':', '*', 'x'], correctAnswerIndex: 0 },
            { id: 'q3', questionText: 'What will `let x = 5 + "5";` result in?', options: ['10', '"55"', '55', 'Error'], correctAnswerIndex: 1 },
          ]
        }
      },
      {
        id: 'js-3',
        title: 'JavaScript Events',
        shortDescription: 'Make your web page react to user actions like clicks and mouse movements.',
        longDescription: 'Events are actions that happen in the browser, like a user clicking a button or pressing a key. You can use JavaScript to "listen" for these events and execute code when they occur. This is the key to creating interactive and responsive web applications.',
        exampleCode: `<!DOCTYPE html>
<html>
<body>
  <button onclick="alert('You clicked me!')">Click me</button>
</body>
</html>`,
        exercise: {
          id: 'ex-js-3',
          title: 'Handle a Button Click',
          question: 'When the button is clicked, change the text of the `<p>` element with id "status" to "Button Clicked!".',
          initialCode: `<!DOCTYPE html>
<html>
<body>
  <button id="myBtn">Click Here</button>
  <p id="status">Not clicked yet.</p>
  <script>
    document.getElementById("myBtn").addEventListener("click", function() {
      // Your code here
    });
  </script>
</body>
</html>`,
          isCompleted: false,
          hint: 'Inside the event listener function, select the paragraph with `document.getElementById("status")` and change its `innerHTML`.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener'
        },
        quiz: {
          id: 'quiz-js-3',
          questions: [
            { id: 'q1', questionText: 'Which event occurs when the user clicks on an HTML element?', options: ['onmouseclick', 'onchange', 'onclick', 'onmouseover'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'How do you add an event listener to an element in modern JavaScript?', options: ['element.event("click", myFunction);', 'element.onClick = myFunction;', 'element.addEventListener("click", myFunction);', 'element.attachEvent("onclick", myFunction);'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'What is the "event" object in an event handler function?', options: ['A reference to the HTML element', 'An object containing information about the event', 'The name of the event as a string', 'A boolean indicating if the event happened'], correctAnswerIndex: 1 },
          ]
        }
      },
    ],
  },
    {
    id: 'python-basics',
    title: 'Python for Beginners',
    description: 'A friendly introduction to programming with Python. No experience required!',
    longDescription: 'Start your programming journey with Python, one of the most popular and versatile languages. This course covers fundamental concepts like variables, loops, functions, and data structures in a clear and engaging way.',
    instructor: 'Naveen Antony',
    imageUrl: 'https://picsum.photos/seed/python/600/400',
    category: 'Python',
    modules: [
        {
        id: 'python-1',
        title: 'Hello, Python!',
        shortDescription: 'Learn how to print output to the console, the most basic and essential skill in programming.',
        longDescription: 'The `print()` function is the primary way to display information to the user in Python. It\'s an invaluable tool for seeing the results of your code and for debugging. You pass the data you want to display inside the parentheses.',
        exampleCode: `print("Hello, World!")`,
        exercise: {
          id: 'ex-python-1',
          title: 'Print a Greeting',
          question: 'Write a single line of Python code that prints the message "Welcome to Python programming!" to the console.',
          initialCode: `# Your code here`,
          isCompleted: false,
          hint: 'Use the `print()` function and put your message inside the parentheses, enclosed in double quotes.',
          documentationLink: 'https://docs.python.org/3/library/functions.html#print'
        },
        quiz: {
          id: 'quiz-python-1',
          questions: [
            { id: 'q1', questionText: 'Which function is used to display output in Python?', options: ['display()', 'print()', 'output()', 'show()'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'What is the correct syntax to print "Hello"?', options: ['print "Hello"', 'p("Hello")', 'print("Hello")', 'echo "Hello"'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'In Python, what is used to indicate a single-line comment?', options: ['//', '#', '/*', '--'], correctAnswerIndex: 1 },
          ]
        }
      },
      {
        id: 'python-2',
        title: 'Variables and Data Types',
        shortDescription: 'Store information in variables and learn about Python\'s basic data types like strings and integers.',
        longDescription: 'Variables are names that refer to values. In Python, you can assign a value to a variable using the `=` operator. Python automatically detects the data type, such as integers (whole numbers), floats (decimal numbers), and strings (text).',
        exampleCode: `name = "Alice"
age = 30
print(name)
print(age)`,
        exercise: {
          id: 'ex-python-2',
          title: 'Store and Print Data',
          question: 'Create a variable named `city` and assign it the value "New York". Create another variable `temperature` and assign it the value 75. Print both variables.',
          initialCode: `# Your code here`,
          isCompleted: false,
          hint: 'Use the assignment operator (`=`) to create your variables. Then use two `print()` statements.',
          documentationLink: 'https://realpython.com/python-variables/'
        },
        quiz: {
          id: 'quiz-python-2',
          questions: [
            { id: 'q1', questionText: 'What is the correct way to assign the integer 5 to a variable named `x`?', options: ['x = 5', 'x := 5', 'let x = 5', 'int x = 5'], correctAnswerIndex: 0 },
            { id: 'q2', questionText: 'Which of the following is NOT a standard data type in Python?', options: ['String', 'Integer', 'Float', 'Character'], correctAnswerIndex: 3 },
            { id: 'q3', questionText: 'What is the data type of the value `"10"`?', options: ['Integer', 'Float', 'String', 'Boolean'], correctAnswerIndex: 2 },
          ]
        }
      },
       {
        id: 'python-3',
        title: 'Basic Arithmetic',
        shortDescription: 'Perform mathematical calculations like addition, subtraction, multiplication, and division.',
        longDescription: 'Python can be used as a powerful calculator. It supports all standard arithmetic operators: `+` (addition), `-` (subtraction), `*` (multiplication), and `/` (division). You can use these operators with numbers or variables containing numbers.',
        exampleCode: `x = 10
y = 5
sum_result = x + y
product_result = x * y
print("Sum:", sum_result)
print("Product:", product_result)`,
        exercise: {
          id: 'ex-python-3',
          title: 'Calculate the Area of a Rectangle',
          question: 'Create two variables, `width` and `height`, with values 10 and 20. Calculate the area (`width` * `height`) and store it in a variable called `area`. Finally, print the `area`.',
          initialCode: `width = 10
height = 20

# Your code here`,
          isCompleted: false,
          hint: 'Create a new variable `area` and set its value to the result of `width * height`.',
          documentationLink: 'https://www.w3schools.com/python/python_operators.asp'
        },
        quiz: {
          id: 'quiz-python-3',
          questions: [
            { id: 'q1', questionText: 'Which operator is used for multiplication?', options: ['x', '#', '*', '&'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'What is the result of `10 / 2` in Python 3?', options: ['5', '5.0', 'Error', '2'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'What is the result of `7 % 3` (modulo operator)?', options: ['2', '2.33', '1', '3'], correctAnswerIndex: 2 },
          ]
        }
      },
      {
        id: 'python-4',
        title: 'Working with Strings',
        shortDescription: 'Learn how to combine strings and use f-strings for easy formatting.',
        longDescription: 'Strings are sequences of characters. You can combine (concatenate) them using the `+` operator. A more modern and powerful way to embed variables into strings is by using f-strings. You simply prefix the string with an `f` and place your variable names inside curly braces `{}`.',
        exampleCode: `name = "Bob"
greeting = "Hello, " + name
print(greeting)

age = 25
message = f"Bob is {age} years old."
print(message)`,
        exercise: {
          id: 'ex-python-4',
          title: 'Create a Formatted String',
          question: 'Create two variables, `item` with value "laptop" and `price` with value 1200. Use an f-string to create and print the message: "The price of the laptop is $1200."',
          initialCode: `item = "laptop"
price = 1200

# Your code here`,
          isCompleted: false,
          hint: 'Start your string with `f"..."` and place the `item` and `price` variables inside curly braces within the string.',
          documentationLink: 'https://realpython.com/python-f-strings/'
        },
        quiz: {
          id: 'quiz-python-4',
          questions: [
            { id: 'q1', questionText: 'Which operator is used to combine strings?', options: ['&', '+', '*', '%'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'How do you create an f-string?', options: ['By starting the string with `f`', 'By using the `format()` method', 'By using `str()`', 'By starting the string with `fmt`'], correctAnswerIndex: 0 },
            { id: 'q3', questionText: 'What is the output of `f"The number is {5*2}"`?', options: ['The number is {5*2}', 'The number is 10', 'The number is {10}', 'Error'], correctAnswerIndex: 1 },
          ]
        }
      },
      {
        id: 'python-5',
        title: 'Python Lists',
        shortDescription: 'Learn to store multiple items in a single variable using lists.',
        longDescription: 'A list is a data structure in Python that is a mutable, or changeable, ordered sequence of elements. Lists are defined by having values between square brackets `[]`, separated by commas. You can access items in a list by referring to their index number, starting from 0.',
        exampleCode: `fruits = ["apple", "banana", "cherry"]
print(fruits)
print(fruits[0]) # Access the first item`,
        exercise: {
          id: 'ex-python-5',
          title: 'Create and Access a List',
          question: 'Create a list named `colors` containing the strings "red", "green", and "blue". Then, print the second item in the list.',
          initialCode: `# Your code here`,
          isCompleted: false,
          hint: 'Remember that list indices start at 0, so the second item will be at index 1.',
          documentationLink: 'https://www.w3schools.com/python/python_lists.asp'
        },
        quiz: {
          id: 'quiz-python-5',
          questions: [
            { id: 'q1', questionText: 'How do you create a list in Python?', options: ['{1, 2, 3}', '[1, 2, 3]', '(1, 2, 3)', 'list(1, 2, 3)'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'Given `my_list = [10, 20, 30]`, how do you access the first element?', options: ['my_list(0)', 'my_list[0]', 'my_list.first()', 'my_list[1]'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Are lists in Python mutable (changeable)?', options: ['Yes', 'No', 'Only lists of numbers', 'Only lists of strings'], correctAnswerIndex: 0 },
          ]
        }
      },
       {
        id: 'python-6',
        title: 'Conditional Logic',
        shortDescription: 'Make decisions in your code using `if`, `elif`, and `else` statements.',
        longDescription: 'Conditional statements allow your program to execute certain blocks of code only if a specific condition is true. The `if` statement is the most basic form. You can add an `else` block to run code if the condition is false, and `elif` (else if) to check for multiple conditions.',
        exampleCode: `temperature = 75
if temperature > 80:
  print("It's a hot day!")
else:
  print("It's not too hot.")`,
        exercise: {
          id: 'ex-python-6',
          title: 'Check a Score',
          question: 'Given the score variable, write an `if-else` statement that prints "Passing grade" if `score` is 50 or greater, and "Failing grade" otherwise.',
          initialCode: `score = 65
# Your code here`,
          isCompleted: false,
          hint: 'Your condition should be `score >= 50`. Make sure to use proper indentation for the blocks inside `if` and `else`.',
          documentationLink: 'https://docs.python.org/3/tutorial/controlflow.html#if-statements'
        },
        quiz: {
          id: 'quiz-python-6',
          questions: [
            { id: 'q1', questionText: 'Which keyword is used to check for another condition if the first `if` is false?', options: ['else if', 'elseif', 'elif', 'then'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'What is the operator for "not equal to"?', options: ['<>', '!=', '==!', '=/='], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'What is required at the end of an `if`, `elif`, or `else` line?', options: [';', ':', '{', 'end'], correctAnswerIndex: 1 },
          ]
        }
      },
      {
        id: 'python-7',
        title: 'For Loops',
        shortDescription: 'Learn how to iterate over a sequence (like a list) to perform repetitive tasks.',
        longDescription: 'A `for` loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string). This is less like the `for` keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages. With the `for` loop we can execute a set of statements, once for each item in a list, tuple, set etc.',
        exampleCode: `fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
  print(fruit)`,
        exercise: {
          id: 'ex-python-7',
          title: 'Loop Through a List',
          question: 'You are given a list of numbers. Write a `for` loop that iterates through the list and prints each number.',
          initialCode: `numbers = [1, 2, 3, 4, 5]
# Your code here`,
          isCompleted: false,
          hint: 'Use the syntax `for num in numbers:` and then `print(num)` inside the loop.',
          documentationLink: 'https://docs.python.org/3/tutorial/controlflow.html#for-statements'
        },
        quiz: {
          id: 'quiz-python-7',
          questions: [
            { id: 'q1', questionText: 'What is the primary use of a `for` loop?', options: ['Making a single decision', 'Running code an unknown number of times', 'Iterating over a sequence of items', 'Defining a function'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'What is the correct syntax for a `for` loop in Python?', options: ['for i in range(5):', 'for(i=0; i<5; i++)', 'for i=1 to 5', 'loop i from 1 to 5'], correctAnswerIndex: 0 },
            { id: 'q3', questionText: 'In `for item in my_list:`, what is `item`?', options: ['The index of the current element', 'The list itself', 'The value of the current element', 'A required keyword'], correctAnswerIndex: 2 },
          ]
        }
      },
      {
        id: 'python-8',
        title: 'Python Functions',
        shortDescription: 'Write reusable blocks of code with functions.',
        longDescription: 'A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing. You define a function using the `def` keyword.',
        exampleCode: `def greet(name):
  print(f"Hello, {name}!")

greet("Alice")
greet("Bob")`,
        exercise: {
          id: 'ex-python-8',
          title: 'Create a Simple Function',
          question: 'Define a function named `add_numbers` that takes two parameters, `a` and `b`, and prints their sum. Call the function with the numbers 5 and 3.',
          initialCode: `# Define your function here

# Call your function here`,
          isCompleted: false,
          hint: 'Define the function with `def add_numbers(a, b):`. Inside the function, print the result of `a + b`.',
          documentationLink: 'https://www.w3schools.com/python/python_functions.asp'
        },
        quiz: {
          id: 'quiz-python-8',
          questions: [
            { id: 'q1', questionText: 'Which keyword is used to define a function in Python?', options: ['function', 'def', 'fun', 'define'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'What is the purpose of the `return` keyword in a function?', options: ['To print a value', 'To stop the function', 'To send a value back from the function', 'To define a parameter'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'Information passed into a function is called what?', options: ['Arguments or Parameters', 'Variables', 'Data types', 'Values'], correctAnswerIndex: 0 },
          ]
        }
      },
      {
        id: 'python-9',
        title: 'Putting it all together',
        shortDescription: 'Combine functions, loops, and conditionals to solve a problem.',
        longDescription: 'Now it\'s time to combine the concepts you\'ve learned. Real-world programs are built by integrating variables, control flow (loops and conditionals), and functions to create a cohesive solution. This exercise will test your ability to bring these pieces together.',
        exampleCode: `def find_evens(numbers):
  evens = []
  for number in numbers:
    if number % 2 == 0:
      evens.append(number)
  return evens

my_list = [1, 2, 3, 4, 5, 6]
even_numbers = find_evens(my_list)
print(even_numbers)`,
        exercise: {
          id: 'ex-python-9',
          title: 'Sum of Positive Numbers',
          question: 'Write a function `sum_positives` that takes a list of numbers and returns the sum of only the positive numbers (numbers > 0). Test it with the provided list.',
          initialCode: `def sum_positives(numbers):
  # Your code here
  pass

# Test your function
print(sum_positives([1, -2, 3, -4, 5])) # Expected output: 9`,
          isCompleted: false,
          hint: 'Initialize a variable for the sum at 0. Loop through the list. Inside the loop, use an `if` statement to check if a number is greater than 0. If it is, add it to your sum. Finally, `return` the sum after the loop.',
          documentationLink: 'https://docs.python.org/3/tutorial/controlflow.html'
        },
        quiz: {
          id: 'quiz-python-9',
          questions: [
            { id: 'q1', questionText: 'To get the number of items in a list `my_list`, you use:', options: ['my_list.size()', 'len(my_list)', 'my_list.length', 'size(my_list)'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'How do you add an item `x` to the end of a list `my_list`?', options: ['my_list.add(x)', 'my_list.push(x)', 'my_list.append(x)', 'my_list.insert(x)'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'Which of these is NOT a core building block of most programs?', options: ['Variables', 'Loops', 'Conditionals', 'Machine Learning'], correctAnswerIndex: 3 },
          ]
        }
      },
    ],
  },
   {
    id: 'java-basics',
    title: 'Core Java Programming',
    description: 'Learn the fundamentals of Java, one of the most in-demand programming languages.',
    longDescription: 'This course provides a solid foundation in Java programming. You will learn about object-oriented programming (OOP) principles, core syntax, data structures, and how to write robust applications.',
    instructor: 'Dinesh',
    imageUrl: 'https://picsum.photos/seed/java/600/400',
    category: 'Java',
    modules: [
        {
        id: 'java-1',
        title: 'Your First Java Program',
        shortDescription: 'Learn the basic structure of a Java program and how to print output to the console.',
        longDescription: 'Every Java application must contain a `main` method. The `public static void main(String[] args)` is the entry point of your program. To print text to the console, you use `System.out.println()`. This is fundamental for displaying results and debugging.',
        exampleCode: `class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`,
        exercise: {
          id: 'ex-java-1',
          title: 'Print a Welcome Message',
          question: 'Inside the `main` method, write a line of code that prints "Learning Java is exciting!" to the console.',
          initialCode: `class Main {
  public static void main(String[] args) {
    // Your code here
  }
}`,
          isCompleted: false,
          hint: 'Use `System.out.println()` and put your message in double quotes inside the parentheses.',
          documentationLink: 'https://www.w3schools.com/java/java_syntax.asp'
        },
        quiz: {
          id: 'quiz-java-1',
          questions: [
            { id: 'q1', questionText: 'What is the entry point of a Java program?', options: ['The start() method', 'The main() method', 'The first line of the class', 'The run() method'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'Which statement is used to print output to the console?', options: ['Console.WriteLine()', 'print()', 'System.out.println()', 'cout <<'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'Every statement in Java must end with a:', options: [':', '.', '}', ';'], correctAnswerIndex: 3 },
          ]
        }
      },
       {
        id: 'java-2',
        title: 'Variables and Data Types',
        shortDescription: 'Declare variables to store data like numbers, text, and booleans.',
        longDescription: 'In Java, you must declare the type of a variable before you can use it. Common primitive data types include `int` for integers, `double` for floating-point numbers, `boolean` for true/false values, and `String` for text.',
        exampleCode: `class Main {
  public static void main(String[] args) {
    String name = "Java";
    int version = 17;
    System.out.println("Current version of " + name + " is " + version);
  }
}`,
        exercise: {
          id: 'ex-java-2',
          title: 'Declare and Use Variables',
          question: 'Declare an integer variable named `age` and set it to 25. Declare a String variable `city` and set it to "London". Print a message that says "I live in London and I am 25 years old."',
          initialCode: `class Main {
  public static void main(String[] args) {
    // Your code here
  }
}`,
          isCompleted: false,
          hint: 'Declare variables with `int age = 25;` and `String city = "London";`. Use the `+` operator to combine strings and variables in your `System.out.println()` statement.',
          documentationLink: 'https://www.w3schools.com/java/java_variables.asp'
        },
        quiz: {
          id: 'quiz-java-2',
          questions: [
            { id: 'q1', questionText: 'How do you declare a variable for a whole number in Java?', options: ['number x;', 'string x;', 'int x;', 'double x;'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'Which data type would you use for a person\'s name?', options: ['int', 'String', 'char', 'boolean'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Is Java a statically-typed or dynamically-typed language?', options: ['Statically-typed (you must declare the type)', 'Dynamically-typed (the type is inferred)', 'Both', 'Neither'], correctAnswerIndex: 0 },
          ]
        }
      },
      {
        id: 'java-3',
        title: 'Arithmetic Operators',
        shortDescription: 'Perform mathematical calculations in Java.',
        longDescription: 'Java supports the standard arithmetic operators for performing calculations: `+` for addition, `-` for subtraction, `*` for multiplication, and `/` for division. These can be used directly with numbers or with variables.',
        exampleCode: `class Main {
  public static void main(String[] args) {
    int a = 12;
    int b = 4;
    int sum = a + b; // 16
    int product = a * b; // 48
    System.out.println("Sum: " + sum);
    System.out.println("Product: " + product);
  }
}`,
        exercise: {
          id: 'ex-java-3',
          title: 'Calculate Total Cost',
          question: 'Given an item `price` of 15 and `quantity` of 3, calculate the `totalCost` by multiplying them. Then, print the result in the format "Total cost: 45".',
          initialCode: `class Main {
  public static void main(String[] args) {
    int price = 15;
    int quantity = 3;
    // Your code here
  }
}`,
          isCompleted: false,
          hint: 'Create a new `int` variable named `totalCost` and assign it the value of `price * quantity`.',
          documentationLink: 'https://www.w3schools.com/java/java_operators.asp'
        },
        quiz: {
          id: 'quiz-java-3',
          questions: [
            { id: 'q1', questionText: 'What is the operator for division?', options: ['%', '/', '\\', 'div'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'What is the result of `10 % 3` (modulo)?', options: ['3', '3.33', '1', '0'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'How do you increment an integer `x` by one?', options: ['x = x + 1', 'x++', 'x += 1', 'All of the above'], correctAnswerIndex: 3 },
          ]
        }
      },
      {
        id: 'java-4',
        title: 'Working with Strings',
        shortDescription: 'Learn a few useful methods for manipulating strings.',
        longDescription: 'The `String` class in Java has many built-in methods. For example, `length()` returns the number of characters in the string, and `toUpperCase()` returns a new string with all characters in uppercase. These methods are called using the dot notation (e.g., `myString.length()`).',
        exampleCode: `class Main {
  public static void main(String[] args) {
    String message = "Hello World";
    System.out.println("Length: " + message.length());
    System.out.println("Uppercase: " + message.toUpperCase());
  }
}`,
        exercise: {
          id: 'ex-java-4',
          title: 'Manipulate a String',
          question: 'Given the string `language`, print its length and then print the string in all lowercase letters.',
          initialCode: `class Main {
  public static void main(String[] args) {
    String language = "JAVA";
    // Your code here
  }
}`,
          isCompleted: false,
          hint: 'Use the `length()` method to find the length, and the `toLowerCase()` method to convert the string.',
          documentationLink: 'https://www.w3schools.com/java/java_strings.asp'
        },
        quiz: {
          id: 'quiz-java-4',
          questions: [
            { id: 'q1', questionText: 'Which method returns the number of characters in a String?', options: ['size()', 'count()', 'length()', 'len()'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'How do you combine two strings, `str1` and `str2`?', options: ['str1 + str2', 'str1.combine(str2)', 'str1.append(str2)', 'All of the above'], correctAnswerIndex: 0 },
            { id: 'q3', questionText: 'Are String objects in Java mutable (changeable)?', options: ['Yes', 'No, they are immutable', 'Only if declared with `var`', 'Only if they contain numbers'], correctAnswerIndex: 1 },
          ]
        }
      },
      {
        id: 'java-5',
        title: 'Conditional Statements',
        shortDescription: 'Use `if-else` statements to control the flow of your program.',
        longDescription: 'Conditional logic is crucial for making decisions in code. In Java, you use the `if` statement to execute a block of code if a condition is true. You can optionally add an `else` block to execute if the condition is false.',
        exampleCode: `class Main {
  public static void main(String[] args) {
    int time = 20;
    if (time < 18) {
      System.out.println("Good day.");
    } else {
      System.out.println("Good evening.");
    }
  }
}`,
        exercise: {
          id: 'ex-java-5',
          title: 'Check Temperature',
          question: 'Given the `temperature` variable, write an `if-else` block. If the temperature is greater than 30, print "It is hot outside.". Otherwise, print "It is a pleasant day."',
          initialCode: `class Main {
  public static void main(String[] args) {
    int temperature = 25;
    // Your code here
  }
}`,
          isCompleted: false,
          hint: 'Your condition inside the `if` statement should be `temperature > 30`.',
          documentationLink: 'https://www.w3schools.com/java/java_conditions.asp'
        },
        quiz: {
          id: 'quiz-java-5',
          questions: [
            { id: 'q1', questionText: 'What is the correct syntax for an if-statement in Java?', options: ['if x > y then {}', 'if (x > y) {}', 'if x > y {}', 'if: x > y {}'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'Which operator is used for checking if two values are equal?', options: ['=', '==', '===', 'eq'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Which keyword is used to specify a block of code to be executed if the same condition is false?', options: ['other', 'otherwise', 'else', 'alternative'], correctAnswerIndex: 2 },
          ]
        }
      },
      {
        id: 'java-6',
        title: 'Java Arrays',
        shortDescription: 'Store multiple values in a single variable using arrays.',
        longDescription: 'Arrays are used to store multiple values of the same type in a single variable. You declare an array by defining the type followed by square brackets `[]`. You can access an element by referring to its index number, which starts from 0.',
        exampleCode: `class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford"};
    System.out.println(cars[0]); // Outputs Volvo
  }
}`,
        exercise: {
          id: 'ex-java-6',
          title: 'Create and Access an Array',
          question: 'Create an array of integers named `scores` containing the values 95, 88, and 76. Then, print the third score from the array.',
          initialCode: `class Main {
  public static void main(String[] args) {
    // Your code here
  }
}`,
          isCompleted: false,
          hint: 'Declare the array with `int[] scores = {95, 88, 76};`. Remember that the third element is at index 2.',
          documentationLink: 'https://www.w3schools.com/java/java_arrays.asp'
        },
        quiz: {
          id: 'quiz-java-6',
          questions: [
            { id: 'q1', questionText: 'How do you declare an array of integers?', options: ['int array[];', 'int[] array;', 'array<int>;', 'Both A and B are correct'], correctAnswerIndex: 3 },
            { id: 'q2', questionText: 'Array indexes in Java start with:', options: ['-1', '0', '1', 'It can be defined by the programmer'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'How do you find the number of elements in an array named `myArray`?', options: ['myArray.size', 'myArray.size()', 'myArray.length()', 'myArray.length'], correctAnswerIndex: 3 },
          ]
        }
      },
      {
        id: 'java-7',
        title: 'For Loops',
        shortDescription: 'Execute a block of code a specific number of times.',
        longDescription: 'The `for` loop is ideal when you know exactly how many times you want to loop through a block of code. It has three parts: initialization (e.g., `int i = 0`), condition (e.g., `i < 5`), and increment (e.g., `i++`). It\'s commonly used to iterate over arrays.',
        exampleCode: `class Main {
  public static void main(String[] args) {
    String[] letters = {"a", "b", "c"};
    for (int i = 0; i < letters.length; i++) {
      System.out.println(letters[i]);
    }
  }
}`,
        exercise: {
          id: 'ex-java-7',
          title: 'Loop Through an Array',
          question: 'Given the `numbers` array, use a `for` loop to iterate through it and print each number on a new line.',
          initialCode: `class Main {
  public static void main(String[] args) {
    int[] numbers = {10, 20, 30, 40};
    // Your code here
  }
}`,
          isCompleted: false,
          hint: 'Your loop should run as long as `i` is less than `numbers.length`. Inside the loop, print `numbers[i]`.',
          documentationLink: 'https://www.w3schools.com/java/java_for_loop.asp'
        },
        quiz: {
          id: 'quiz-java-7',
          questions: [
            { id: 'q1', questionText: 'Which is the correct syntax for a `for` loop in Java?', options: ['for (i=0; i<5; i++)', 'for i in 1..5', 'for (int i = 0; i < 5; i++)', 'for (i <= 5; i++)'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'What is the purpose of the `i++` part of a standard for loop?', options: ['It sets the initial value', 'It is the loop condition', 'It is executed after each iteration', 'It declares the variable'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'A "for-each" loop in Java is used for what?', options: ['Looping a specific number of times', 'Exclusively for iterating through arrays and collections', 'Conditional logic', 'Defining methods'], correctAnswerIndex: 1 },
          ]
        }
      },
       {
        id: 'java-8',
        title: 'Java Methods',
        shortDescription: 'Create reusable blocks of code by writing your own methods.',
        longDescription: 'A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions. Defining methods helps organize your code and makes it reusable.',
        exampleCode: `class Main {
  static void myMethod(String name) {
    System.out.println("Hello, " + name);
  }

  public static void main(String[] args) {
    myMethod("Liam");
    myMethod("Jenny");
  }
}`,
        exercise: {
          id: 'ex-java-8',
          title: 'Create and Call a Method',
          question: 'Create a static method named `printSum` that takes two integers, `a` and `b`, as parameters and prints their sum. Call this method from `main` with the values 7 and 8.',
          initialCode: `class Main {
  // Define your method here

  public static void main(String[] args) {
    // Call your method here
  }
}`,
          isCompleted: false,
          hint: 'Define the method as `static void printSum(int a, int b)`. Inside, use `System.out.println(a + b);`.',
          documentationLink: 'https://www.w3schools.com/java/java_methods.asp'
        },
        quiz: {
          id: 'quiz-java-8',
          questions: [
            { id: 'q1', questionText: 'How do you define a method in Java?', options: ['def myMethod() {}', 'function myMethod() {}', 'void myMethod() {}', 'method myMethod() {}'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'What does the `void` keyword mean in a method declaration?', options: ['The method is public', 'The method takes no parameters', 'The method does not return a value', 'The method is static'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'How do you call a method named `myMethod`?', options: ['call myMethod();', 'myMethod();', 'run myMethod();', 'execute myMethod();'], correctAnswerIndex: 1 },
          ]
        }
      },
       {
        id: 'java-9',
        title: 'Classes and Objects',
        shortDescription: 'Understand the basics of Object-Oriented Programming with classes and objects.',
        longDescription: 'Java is an object-oriented programming language. A class is a template for objects, and an object is an instance of a class. A class can have attributes (variables) and methods (functions). This is a core concept in Java programming.',
        exampleCode: `public class Car {
  String color = "red";
  
  public void honk() {
    System.out.println("Beep beep!");
  }
  
  public static void main(String[] args) {
    Car myCar = new Car();
    System.out.println(myCar.color);
    myCar.honk();
  }
}`,
        exercise: {
          id: 'ex-java-9',
          title: 'Create a Dog Class',
          question: 'Create a class named `Dog`. Give it a `String` attribute named `breed` and set its value to "Golden Retriever". Also, give it a method named `bark()` that prints "Woof!". In the `main` method, create an instance of `Dog` and call the `bark()` method.',
          initialCode: `class Dog {
  // Your attributes and methods here
}

class Main {
  public static void main(String[] args) {
    // Create an instance and call the method
  }
}`,
          isCompleted: false,
          hint: 'Inside the `Dog` class, define `String breed = "Golden Retriever";` and `public void bark() { ... }`. In `main`, create the object with `Dog myDog = new Dog();` and call the method with `myDog.bark();`',
          documentationLink: 'https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html'
        },
        quiz: {
          id: 'quiz-java-9',
          questions: [
            { id: 'q1', questionText: 'In Java, a class is a...', options: ['template or blueprint for objects', 'running instance of a program', 'primitive data type', 'method for printing'], correctAnswerIndex: 0 },
            { id: 'q2', questionText: 'How do you create an object of a class named `MyClass`?', options: ['new MyClass();', 'MyClass myObj = new MyClass();', 'MyClass myObj = MyClass();', 'create MyClass myObj;'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Variables inside a class are called:', options: ['Parameters', 'Globals', 'Attributes or Fields', 'Arguments'], correctAnswerIndex: 2 },
          ]
        }
      },
    ],
  },
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    description: 'Learn to build complete web applications from the database to the user interface.',
    longDescription: 'Become a full-stack developer by mastering both front-end and back-end technologies. This course covers Node.js, Express, React, and MongoDB, enabling you to build and deploy dynamic, data-driven web applications.',
    instructor: 'John ',
    imageUrl: 'https://picsum.photos/seed/fullstack/600/400',
    category: 'Full Stack',
    modules: [
      {
        id: 'fs-1',
        title: 'What is Full Stack?',
        shortDescription: 'Understand the roles of the front-end, back-end, and database in a web application.',
        longDescription: 'Full-stack development refers to building both the client-side (front-end) and server-side (back-end) of a web application. The front-end is what the user sees and interacts with. The back-end is the server, application logic, and database that work behind the scenes.',
        exampleCode: `// This is a conceptual lesson.
// Front-end: HTML, CSS, JavaScript (React)
// Back-end: Server-side language (Node.js), Database (MongoDB)`,
        exercise: {
          id: 'ex-fs-1',
          title: 'Identify the Technology',
          question: 'In a full-stack application, which technology is primarily responsible for styling the user interface?',
          initialCode: `// Answer with one of the following:
// A) Node.js
// B) SQL
// C) CSS`,
          isCompleted: false,
          hint: 'The "C" in CSS stands for "Cascading Style Sheets".',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer'
        },
        quiz: {
          id: 'quiz-fs-1',
          questions: [
            { id: 'q1', questionText: 'What is the "front-end" of a web application?', options: ['The server and database', 'The part the user interacts with in the browser', 'The network infrastructure', 'The operating system'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'What is the "back-end" responsible for?', options: ['Styling buttons', 'Running on the user\'s computer', 'Server-side logic and database interactions', 'Displaying images'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'A full-stack developer works on:', options: ['Only the front-end', 'Only the back-end', 'Both the front-end and back-end', 'Only the database'], correctAnswerIndex: 2 },
          ]
        }
      },
      {
        id: 'fs-2',
        title: 'Introduction to Node.js',
        shortDescription: 'Learn what Node.js is and how it allows you to run JavaScript on the server.',
        longDescription: 'Node.js is a runtime environment that allows you to execute JavaScript code outside of a browser. This is what makes it possible to build the back-end of a web application using JavaScript. It\'s known for its speed and efficiency.',
        exampleCode: `// To run this code, you need Node.js installed
// File: server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node.js server!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running...');
});`,
        exercise: {
          id: 'ex-fs-2',
          title: 'Complete the Code',
          question: 'Node.js is a _______ that lets you run JavaScript on the server.',
          initialCode: `// Fill in the blank:
// A) JavaScript library
// B) Database
// C) Runtime environment`,
          isCompleted: false,
          hint: 'Node.js provides the "environment" for server-side JavaScript to run.',
          documentationLink: 'https://nodejs.org/en/about/'
        },
        quiz: {
          id: 'quiz-fs-2',
          questions: [
            { id: 'q1', questionText: 'What language is Node.js based on?', options: ['Java', 'Python', 'JavaScript', 'C++'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'Is Node.js suitable for building front-end or back-end applications?', options: ['Front-end', 'Back-end', 'Both', 'Neither'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'What is `npm`?', options: ['A code editor', 'The Node.js compiler', 'Node Package Manager', 'A database system'], correctAnswerIndex: 2 },
          ]
        }
      },
       {
        id: 'fs-3',
        title: 'Introduction to Express.js',
        shortDescription: 'Learn about Express, a popular and minimalist web framework for Node.js.',
        longDescription: 'Express.js is a framework that runs on top of Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, handling requests, and managing middleware. It makes back-end development much faster and more organized.',
        exampleCode: `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});`,
        exercise: {
          id: 'ex-fs-3',
          title: 'Create a Simple API Endpoint',
          question: 'Using Express, create a GET endpoint at "/api/greeting" that returns a JSON object: { "message": "Hello from the server!" }.',
          initialCode: `const express = require('express');
const app = express();
const port = 3000;

// Your code here

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,
          isCompleted: false,
          hint: 'You will need to use `app.get()` to define the route and `res.json()` to send the JSON response.',
          documentationLink: 'https://expressjs.com/en/starter/basic-routing.html'
        },
        quiz: {
          id: 'quiz-fs-3',
          questions: [
            { id: 'q1', questionText: 'Express.js is a framework for which environment?', options: ['React', 'Python', 'Java', 'Node.js'], correctAnswerIndex: 3 },
            { id: 'q2', questionText: 'What is "routing" in the context of Express?', options: ['Defining URL endpoints and how they respond', 'Styling web pages', 'Connecting to a database', 'Managing packages'], correctAnswerIndex: 0 },
            { id: 'q3', questionText: 'In an Express route handler `(req, res) => {}`, what does `res` represent?', options: ['The incoming request', 'The response to be sent back', 'A resource file', 'A redirect command'], correctAnswerIndex: 1 },
          ]
        }
      },
      {
        id: 'fs-4',
        title: 'Introduction to React',
        shortDescription: 'Discover React, a powerful JavaScript library for building user interfaces.',
        longDescription: 'React is a front-end library used for building complex and interactive UIs. Its main concept is the use of reusable "components" - independent pieces of UI that manage their own state. This component-based architecture makes building and maintaining large applications much easier.',
        exampleCode: `import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// In another file:
// <Greeting name="Alice" />`,
        exercise: {
          id: 'ex-fs-4',
          title: 'Create a Simple Component',
          question: 'Create a React component named `Welcome` that displays an `<h2>` element with the text "Welcome to our website!".',
          initialCode: `import React from 'react';

function Welcome() {
  // Your code here
  return (
    // Your JSX here
  );
}`,
          isCompleted: false,
          hint: 'The `return` statement should contain the JSX `<h2>Welcome to our website!</h2>`.',
          documentationLink: 'https://react.dev/learn'
        },
        quiz: {
          id: 'quiz-fs-4',
          questions: [
            { id: 'q1', questionText: 'React is a JavaScript library for building what?', options: ['Databases', 'Servers', 'User Interfaces', 'Operating Systems'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'What are the building blocks of a React application called?', options: ['Functions', 'Classes', 'Components', 'APIs'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'What is JSX?', options: ['A styling language like CSS', 'A JavaScript syntax extension for writing HTML-like code', 'A database query language', 'A type of component'], correctAnswerIndex: 1 },
          ]
        }
      },
      {
        id: 'fs-5',
        title: 'React Components and Props',
        shortDescription: 'Learn how to create reusable components and pass data to them using props.',
        longDescription: 'Components are the building blocks of a React application. Props (short for properties) are how you pass data from a parent component down to a child component. This allows you to create dynamic and configurable components.',
        exampleCode: `function UserProfile(props) {
  return <p>Username: {props.username}</p>;
}

// Usage:
// <UserProfile username="tech_student" />`,
        exercise: {
          id: 'ex-fs-5',
          title: 'Create a Button Component',
          question: 'Create a `Button` component that accepts a `text` prop. The component should render a `<button>` element that displays the text passed to it.',
          initialCode: `import React from 'react';

function Button(props) {
  return (
    // Your JSX here
  );
}`,
          isCompleted: false,
          hint: 'Inside the `<button>` tags, use `{props.text}` to display the value passed in.',
          documentationLink: 'https://react.dev/learn/passing-props-to-a-component'
        },
        quiz: {
          id: 'quiz-fs-5',
          questions: [
            { id: 'q1', questionText: 'What are "props" in React?', options: ['Internal state of a component', 'Data passed from a parent to a child component', 'CSS styles', 'Event handlers'], correctAnswerIndex: 1 },
            { id: 'q2', questionText: 'Are props mutable (can a component change its own props)?', options: ['Yes', 'No, props are read-only', 'Only in class components', 'Only with a special hook'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'How do you access a prop named `user` inside a component?', options: ['this.prop.user', 'user', '{user}', 'props.user'], correctAnswerIndex: 3 },
          ]
        }
      },
      {
        id: 'fs-6',
        title: 'React State with useState',
        shortDescription: 'Learn how to manage component-level state with the `useState` hook.',
        longDescription: 'State allows a component to "remember" information and re-render when that information changes. The `useState` hook is the primary way to add state to a functional component. It returns a pair: the current state value and a function that lets you update it.',
        exampleCode: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
        exercise: {
          id: 'ex-fs-6',
          title: 'Build a Counter Component',
          question: 'Create a React component with a state variable "count". Display the count and include two buttons to increment and decrement it.',
          initialCode: `import React, { useState } from 'react';

function Counter() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
          isCompleted: false,
          hint: 'Use the `useState` hook to manage the count. You will need two functions to handle the increment and decrement logic, which will be called by the `onClick` event of the buttons.',
          documentationLink: 'https://react.dev/reference/react/useState'
        },
        quiz: {
          id: 'quiz-fs-6',
          questions: [
            { id: 'q1', questionText: 'What is "state" in React?', options: ['Data that is passed down from a parent', 'Static data that never changes', 'Data that a component manages internally and can change over time', 'An external library'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'Which hook is used to add state to a functional component?', options: ['useEffect', 'useState', 'useContext', 'useReducer'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'When you call the state setter function (e.g., `setCount`), what happens?', options: ['The component re-renders', 'The variable is updated silently', 'A console log is printed', 'An error is thrown'], correctAnswerIndex: 0 },
          ]
        }
      },
      {
        id: 'fs-7',
        title: 'Handling Events in React',
        shortDescription: 'Make your React components interactive by handling user events like clicks.',
        longDescription: 'Handling events in React is very similar to handling events on DOM elements, but with some syntactic differences. For example, event names are camelCased (`onClick` instead of `onclick`), and you pass a function as the event handler rather than a string.',
        exampleCode: `function AlertButton() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}`,
        exercise: {
          id: 'ex-fs-7',
          title: 'Log a Message on Click',
          question: 'Create a button that, when clicked, calls a function that logs "Button clicked" to the console.',
          initialCode: `import React from 'react';

function LoggerButton() {
  const handleLog = () => {
    // Your code here
  };

  return (
    // Your button here
  );
}`,
          isCompleted: false,
          hint: 'Inside `handleLog`, use `console.log()`. Pass the `handleLog` function to the `onClick` prop of the button.',
          documentationLink: 'https://react.dev/learn/responding-to-events'
        },
        quiz: {
          id: 'quiz-fs-7',
          questions: [
            { id: 'q1', questionText: 'What is the correct syntax for a click event handler in React?', options: ['onclick="myFunction()"', 'on-click={myFunction}', 'onClick={myFunction}', 'click={myFunction}'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'In `<button onClick={() => console.log("Hi")}>`, the event handler is:', options: ['A string', 'An object', 'An arrow function', 'A variable'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'React events are named using which case style?', options: ['snake_case', 'kebab-case', 'PascalCase', 'camelCase'], correctAnswerIndex: 3 },
          ]
        }
      },
      {
        id: 'fs-8',
        title: 'What is a Database?',
        shortDescription: 'Understand the role of a database in storing and managing application data.',
        longDescription: 'A database is an organized collection of data. In a full-stack application, the back-end communicates with the database to store, retrieve, update, and delete information. There are two main types: SQL (relational) and NoSQL (non-relational). MongoDB, often used in the MERN stack, is a NoSQL database.',
        exampleCode: `// Conceptual
// User signs up -> React sends data to Express -> Express saves user data in MongoDB

// User logs in -> React sends credentials to Express -> Express queries MongoDB to verify`,
        exercise: {
          id: 'ex-fs-8',
          title: 'Database Types',
          question: 'MongoDB is an example of what kind of database?',
          initialCode: `// Answer with one of the following:
// A) SQL
// B) NoSQL
// C) In-Memory`,
          isCompleted: false,
          hint: 'The MERN stack (MongoDB, Express, React, Node) is a popular stack that uses a NoSQL database.',
          documentationLink: 'https://www.mongodb.com/nosql-explained'
        },
        quiz: {
          id: 'quiz-fs-8',
          questions: [
            { id: 'q1', questionText: 'What is the primary purpose of a database?', options: ['To style web pages', 'To handle user interactions', 'To persistently store and manage data', 'To run server-side code'], correctAnswerIndex: 2 },
            { id: 'q2', questionText: 'SQL stands for:', options: ['Strong Question Language', 'Structured Query Language', 'Simple Query Language', 'Server Query Language'], correctAnswerIndex: 1 },
            { id: 'q3', questionText: 'Which type of database stores data in tables with rows and columns?', options: ['NoSQL', 'Document', 'SQL (Relational)', 'Graph'], correctAnswerIndex: 2 },
          ]
        }
      },
       {
        id: 'fs-9',
        title: 'Connecting Front-end and Back-end',
        shortDescription: 'Learn how the front-end application communicates with the back-end API.',
        longDescription: 'The front-end and back-end are separate applications that communicate over the network, typically using HTTP requests. The front-end (e.g., a React app) will make API calls (e.g., using `fetch` or Axios) to endpoints exposed by the back-end (e.g., an Express server). The server then processes the request, interacts with the database, and sends back a response, usually in JSON format.',
        exampleCode: `// React front-end code
fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data));

// Express back-end code
app.get('/api/users', (req, res) => {
  // Logic to get users from database
  res.json([{ id: 1, name: "Alice" }]);
});`,
        exercise: {
          id: 'ex-fs-9',
          title: 'Communication Format',
          question: 'What is the most common data format used for communication between a front-end and a back-end API?',
          initialCode: `// Answer with one of the following:
// A) HTML
// B) XML
// C) JSON`,
          isCompleted: false,
          hint: 'JSON stands for JavaScript Object Notation and is lightweight and easy for both humans and machines to read.',
          documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
        },
        quiz: {
          id: 'quiz-fs-9',
          questions: [
            { id: 'q1', questionText: 'What does API stand for?', options: ['Application Programming Interface', 'Automated Program Interaction', 'Application Protocol Interface', 'Advanced Programming Interface'], correctAnswerIndex: 0 },
            { id: 'q2', questionText: 'Which browser API is commonly used to make HTTP requests from the front-end?', options: ['DOM API', 'Storage API', 'Fetch API', 'GeoLocation API'], correctAnswerIndex: 2 },
            { id: 'q3', questionText: 'JSON stands for:', options: ['Java Standard Object Notation', 'JavaScript Object Notation', 'Java Source Object Notation', 'JavaScript Source Object Notation'], correctAnswerIndex: 1 },
          ]
        }
      },
    ],
  }
];