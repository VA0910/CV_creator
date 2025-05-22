const Project = require('../models/projectModel');
const Anthropic = require('@anthropic-ai/sdk');
const { set } = require('mongoose');
// const OpenAI = require('openai');
// const openai = new OpenAI({apiKey : process.env.OPENAI_API_KEY});

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY

const client = new Anthropic({
  apiKey: CLAUDE_API_KEY,
});

exports.chat = async (req,res)=> {
  
  if(req.isAuthenticated()){
    const userPrompt = req.body.message;
    const frontendRoute = req.body.route;
    const projectId = req.params.pid;
    

    let defaultPrompt;
    if(frontendRoute == `/main/react/${projectId}`){
      defaultPrompt = `
    You are an expert web developer tasked with generating a complete, production-ready React.js project from a user's description. Follow these precise guidelines:
    Make sure to provide a complete ready to run code without any errors

    1. Project Generation Requirements:
    Create a fully functional React.js project using create-react-app or a custom Webpack configuration.
    Website should be multipage with routes.
    Use modern React best practices, including functional components and hooks.
    Implement responsive design using only CSS.
    Ensure meaningful, clean, and well-structured code with a component-based architecture.
    Include appropriate error boundaries for error handling.
    Add basic optimizations for performance and SEO (where applicable for SPAs).
    Use <img> tags for images and write a clear description in the alt attribute.
    Hardcode the required string in the src and alt attributes of the img tag.

    2. JSON Structure Specifications:
    Generate a comprehensive JSON object.
    Keys must represent full file paths.
    Values must contain complete file contents.
    Include all necessary project files, excluding node_modules and .git directories.
    Maintain a standard React.js project structure.
    entryFilePath must contain path to file App.js, the root app which has all routes.
    Do not put App.js and other code files in src folder. Keep them in root folder itself.
    Give the css files for all pages in css folder.Import them from that folder.
    
    3. Structural Details:
    Include at least one reusable component, such as a Button or Card.
    Add basic routing configuration using React Router.
    Provide a clean and maintainable project setup.

    4. Response Format:
    {
      "projectTitle": "",
      "explanation": "",
      "files": {
        "/App.js": {
          "code": ""
        },
        ...
      },
      "entryFilePath": "",
      "generatedFiles": []
    }

    Write all the special characters like \n, \t, \r, or other special characters properly Generate a project that demonstrates professional-grade web development practices, tailored precisely to the user's prompt.
    Do not include any text excluding the code , that is the json object. If you want to give any text explanation of implementation or anything related to conversation, give it in the value of 'explanation' key in the json string.
    All elements must have a draggable class and vertical or horizontal class.DO NOT GIVE ME A SCRIPT FOR draggable class as i am implementing my own script for drag and drop which will use the draggable class. 
    `;
    }
    else if(frontendRoute === `/main/plain/${projectId}`){
      defaultPrompt = `Your task is to create a one-page website based on the given specifications, delivered as an HTML file, CSS file, and JavaScript file. The website should incorporate a variety of engaging and interactive design features, such as drop-down menus, dynamic text and content, clickable buttons, and more. Ensure that the design is visually appealing, responsive, and user-friendly. The HTML, CSS, and JavaScript code should be well-structured, efficiently organized, and properly commented for readability and maintainability. Do not include any text excluding the code. If you want to give any text or explanation or anything related to the conversation, give it in the JSON string as the value of the key 'text'. Ensure that every HTML tag in the HTML code, including sections, divs, project cards, and price cards, has both the draggable class and either horizontal or vertical class. Assign horizontal to headers, footers, and navigation elements, while all other elements should have vertical. No element should be left without these classes. DO NOT GIVE ME A SCRIPT FOR THE draggable CLASS as I am implementing my own script for drag and drop which will use the draggable class. Inside the body, there should be a div with id 'layout' as the root element, and whatever HTML you generate for the page should be placed inside this layout div. you are generating a single page website so the all the links should point to sections of the same page if not, keep the href of link empty. Additionally, incorporate a color palette selector that is hidden by default and can be toggled by clicking a color change button with the id 'theme-toggle' placed at the top right of the page whose background colour is white and text colour to be black . When clicked, the palette should open, displaying five predefined color themes: Minimalist (Cool Tones) with Headings: #1E293B, Primary: #3B82F6, Secondary: #64748B, Background: #F8FAFC, Text: #334155, Sub-heading Text: #475569; Warm (Creative Theme) with Headings: #B91C1C, Primary: #F97316, Secondary: #FACC15, Background: #FEF3C7, Text: #7C2D12, Sub-heading Text: #9A3412; Dark (Futuristic & Sleek) with Headings: #FACC15, Primary: #6366F1, Secondary: #A3E635, Background: #111827, Text: #E5E7EB, Sub-heading Text: #9CA3AF; Natural (Calm & Refreshing) with Headings: #065F46, Primary: #10B981, Secondary: #6EE7B7, Background: #ECFDF5, Text: #064E3B, Sub-heading Text: #047857; and Elegant (Luxury Feel) with Headings: #4B5563, Primary: #8B5CF6, Secondary: #D1D5DB, Background: #F9FAFB, Text: #1F2937, Sub-heading Text: #6B7280. Clicking on a color theme should dynamically update the CSS variables (--primary-color, --secondary-color, --background-color, --text-color, --heading-color, --subheading-color) in the :root selector, ensuring a smooth transition across all website elements. The color change button with id 'theme-toggle' should be fixed at the top right of the UI, allowing users to toggle the palette at any time. Generate a JSON object with four keys: 'html' containing the HTML code, 'css' containing the CSS code, 'js' containing the JavaScript code, and 'explanation' containing relevant explanations or implementations for a simple website. Do not include additional text outside the JSON object. Do not enclose the value of the keys in backticks; enclose them in double quotes and escape all double quotes and newline characters inside the values of html, css, and js. Don't forget to add the newline characters in the code and escape them properly, as they are crucial for indentation. Also, fix the image height and width with respect to the design. Do not add more than five images.`
    }
    
    try {
      const stream = client.messages
        .stream({
          model: 'claude-3-5-sonnet-latest',
          max_tokens: 8000,
          system: [
            {
              "type":"text",
              "text":defaultPrompt,
              "cache_control":{"type":"ephemeral"}
            }
          ],
          messages: [
            {
              role: 'user',
              content: [
                {
                  "type": "text",
                  "text": userPrompt,
                  "cache_control": {"type": "ephemeral"}
                }
              ]
            }
          ],
        })
        .on('text', (text) => {
          console.log(text);
        });
  
      const message = await stream.finalMessage();
      // console.log("Model Response:-",message);

      const fetchNewImageSrc = async (altText) => {
        setTimeout(() => {
          console.log("Waiting for 6 seconds");
        }, 6000);
        // Simulating an API call that returns a new image URL based on alt text
        console.log("Open AI API called.....................")
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: "I am creating a website in which i want relevant images instead of irrelevant placeholders so i am giving you the alt text of the image. Generate a minimal and vector images according to the given alt text - " + altText,
            n: 1,
            size: "1024x1024",
        });
          
        return response.data[0].url;
    };
    
    const replaceImageSrc = async (html) => {
        const imgTagRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
        const matches = Array.from(html.matchAll(imgTagRegex));
        
        for (const match of matches) {
            const altMatch = match[0].match(/alt="([^"]*)"/);
            const altText = altMatch ? altMatch[1] : "No alt attribute";
            const newSrc = await fetchNewImageSrc(altText);
            html = html.replace(match[0], match[0].replace(/src="[^"]+"/, `src="${newSrc}"`));
        }
        return html;
    };

    obj = JSON.parse(message.content[0].text)

    // if(frontendRoute === `/main/react/${projectId}`){
    //     for(let key in obj.files){
    //       // console.log(typeof key)
    //       value = obj.files[key]
    //       // console.log(typeof value)
    //       await replaceImageSrc(value.code).then(updatedHtml => {
    //         console.log(updatedHtml);
    //         value.code = updatedHtml;
    //       })
    //     }
    // }
    // if(frontendRoute === `/main/plain/${projectId}`){
    //   await replaceImageSrc(obj.html).then(updatedHtml => {
    //     console.log(updatedHtml);
    //     obj.html = updatedHtml;
    //   })
    // }
    console.log("Aage Nikal gaye ..............")
    message.content[0].text = JSON.stringify(obj)


      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      // const airesponseJson = message.content[0].text;
      const airesponseObject = obj
      // Add the user prompt and AI response to the messages array
      const now = new Date();

// Get time in 24-hour format
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const formattedTime = `${hours}:${minutes}`;

// Get date in DD-MM-YYYY format
const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const year = now.getFullYear();
const formattedDate = `${day}-${month}-${year}`;

const finalOutput = `${formattedTime} ${formattedDate}`;


      project.chats.push({
        userprompt: userPrompt,
        airesponse: message.content[0].text,
        text : airesponseObject.explanation,
        time : finalOutput
      });


      await project.save();
      res.json(message)
    } catch (error) {
      console.error('Error:', error);
    }

  } else{
    res.json({'error':"Not Authorized"})
  }
}


  exports.getchat=async (req, res) => {
    const { pid } = req.params; 

    try {
        const project = await Project.findById(pid);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }


        const chats = project.chats;
        res.status(200).json({ chats });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while fetching project chats", error: error.message });
    }
}
    

