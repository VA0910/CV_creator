import '../App.css';
import React,{useState,useEffect} from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const MainPage = () => {
  // Define states
  const [prompt, setPrompt] = useState(""); // State for user input
  const [generatedHTML, setGeneratedHTML] = useState(
    "<!DOCTYPE html><html><body><h1>Generated Website</h1></body></html>"
  ); // State for generated code
  const [showCode, setShowCode] = useState(false); // State for toggling between website/code views
  const [iframeWidth, setIframeWidth] = useState(1000); // State for resizable iframe width
  const [iframeHeight, setIframeHeight] = useState(750);
  const [fileName,setFileName] = useState("html");
  const [generatedCSS, setGeneratedCSS] = useState("");

  useEffect(() => {
    Prism.highlightAll(); // Applies syntax highlighting to all <code> elements
  }, [generatedHTML, generatedCSS]);

  let displayCode = fileName === "html" ? generatedHTML.replace(/(\s*<style>[\s\S]*?<\/style>\s*)/, '').trim() : generatedCSS;

  useEffect(() => {
    Prism.highlightAll();
  }, [displayCode]);
  // Function to handle prompt submission
  const handlePromptSubmit = async () => {
    // Simulate fetching generated code from backend (replace this with your API call)
    const fetchedCSS = `* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f4f4f9;
    }

    header {
      background-color: #3f51b5;
      color: white;
      padding: 1rem 2rem;
    }

    header .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    header nav {
      margin-top: 1rem;
    }

    header nav a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      font-size: 1rem;
    }

    header nav a:hover {
      text-decoration: underline;
    }

    .hero {
      background-color: #e3f2fd;
      padding: 2rem;
      text-align: center;
    }

    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .hero button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 0.7rem 1.5rem;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }

    .hero button:hover {
      background-color: #303f9f;
    }

    .products {
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .product {
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .product:hover {
      transform: translateY(-5px);
    }

    .product img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .product h3 {
      font-size: 1.2rem;
      margin: 1rem;
    }

    .product p {
      margin: 0 1rem 1rem;
      color: #555;
    }

    .product button {
      display: block;
      width: calc(100% - 2rem);
      margin: 1rem auto;
      padding: 0.5rem 0;
      background-color: #3f51b5;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .product button:hover {
      background-color: #303f9f;
    }

    footer {
      background-color: #3f51b5;
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
    }`
    const fetchedHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>eCommerce Website</title>
  <style>
    ${fetchedCSS}
  </style>
</head>
<body>
  <header>
    <div class="logo">ShopEase</div>
    <nav>
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <div class="hero">
    <h1>Welcome to ShopEase</h1>
    <p>Your one-stop shop for everything you need!</p>
    <button>Start Shopping</button>
  </div>

  <section class="products">
    <div class="product">
      <img src="https://via.placeholder.com/250" alt="Product 1">
      <h3>Product 1</h3>
      <p>$19.99</p>
      <button>Add to Cart</button>
    </div>
    <div class="product">
      <img src="https://via.placeholder.com/250" alt="Product 2">
      <h3>Product 2</h3>
      <p>$29.99</p>
      <button>Add to Cart</button>
    </div>
    <div class="product">
      <img src="https://via.placeholder.com/250" alt="Product 3">
      <h3>Product 3</h3>
      <p>$39.99</p>
      <button>Add to Cart</button>
    </div>
    <div class="product">
      <img src="https://via.placeholder.com/250" alt="Product 4">
      <h3>Product 4</h3>
      <p>$49.99</p>
      <button>Add to Cart</button>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 ShopEase. All rights reserved.</p>
  </footer>
  
</body>
</html>
`;

  
    setGeneratedHTML(fetchedHTML); // Update generated code
    setGeneratedCSS(fetchedCSS);
  };

  const handleMouseDown = (e, direction) => {
    e.preventDefault();

    const initialX = e.clientX;
    const initialY = e.clientY;
    const initialWidth = iframeWidth;
    const initialHeight = iframeHeight;

    const handleMouseMove = (event) => {
      let newWidth = initialWidth;
      let newHeight = initialHeight;

      if (direction.includes("right")) {
        newWidth = initialWidth + (event.clientX - initialX);
      }
      if (direction.includes("bottom")) {
        newHeight = initialHeight + (event.clientY - initialY);
      }

      setIframeWidth(Math.max(newWidth, 300)); // Enforce minimum width
      setIframeHeight(Math.max(newHeight, 200)); // Enforce minimum height
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white py-4 text-center text-2xl font-bold">
        Text-to-Website Generator
      </header>

      {/* Main Content */}
      <div className="flex flex-grow w-full max-w-full p-4 space-x-4">
        {/* Prompt Input Section */}
        <div className="flex flex-col bg-white shadow-lg p-4 rounded-lg w-1/3">
          <h2 className="text-lg font-semibold mb-2">Enter Your Prompt</h2>
          
          <textarea
            className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="8"
            placeholder="Describe the website you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)} // Update prompt state
          />
          <button
            onClick={handlePromptSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700"
          >
            Generate Website
          </button>
        </div>

        {/* Generated Website Section */}
        <div className="flex-grow bg-white shadow-lg rounded-lg p-4 relative">
          <nav className="flex space-x-4 border-b pb-2 mb-4">
            <button
              className={`py-2 px-4 rounded-md ${!showCode ? "bg-blue-600 text-white" : "text-blue-600"} border-solid border-blue-600`}
              onClick={() => setShowCode(false)}>
              View Website
            </button>
            <button
              className={`py-2 px-4 rounded-md ${showCode ? "bg-blue-600 text-white" : "text-blue-600"} border-solid border-blue-600`}
              onClick={() => setShowCode(true)}>
              View Code
            </button>
          </nav>

          {/* Content: Website or Code */}
          <div className="relative border border-blue-700" style={{ width: iframeWidth, height: iframeHeight }}>
      {/* Iframe */}
      {showCode ? (
    <div className='box-border overflow-scroll max-h-full'>
    <nav className='flex justify-flex-start align-center w-3'>
      <button
      className={`py-2 px-4 rounded-md ${fileName === "html" ? "bg-blue-600 text-white" : "text-blue-600"} border-solid border-blue-600`}
      onClick={() => setFileName("html")}
      >
      HTML
      </button>
      <button
      className={`py-2 px-4 rounded-md ${fileName === "css" ? "bg-blue-600 text-white" : "text-blue-600"} border-solid border-blue-600`}
      onClick={() => setFileName("css")}
      >
      CSS
      </button>
    </nav>
    <pre
        className="w-full h-full p-2 m-0 border border-gray-300 rounded-lg"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "14px",
          overflow: "scroll",
          height:'calc(100% - 0.75rem)'
        }}>
        <code className={`language-${fileName === "html" ? "markup" : "css"}`}>
          {displayCode}
        </code>
      </pre>
    </div>
  ) : (
    // Show Website View
    <iframe
      srcDoc={generatedHTML}
      title="Generated Website"
      className="w-full h-full"
      style={{ border: "none", borderRadius: "8px" }}
    ></iframe>
  )}

      {/* Resizable Borders */}
      <div
        className="absolute top-0 right-0 w-[6px] h-full bg-transparent cursor-ew-resize"
        onMouseDown={(e) => handleMouseDown(e, "right")}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-[6px] bg-transparent cursor-ns-resize"
        onMouseDown={(e) => handleMouseDown(e, "bottom")}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-blue-600 cursor-se-resize"
        onMouseDown={(e) => handleMouseDown(e, "bottom-right")}
      ></div>
    </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
