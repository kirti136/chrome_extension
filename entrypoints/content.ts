import "./popup/style.css";

export default defineContentScript({
  matches: ["*://www.linkedin.com/*"],
  cssInjectionMode: "ui",

  async main(ctx) {
    console.log("LinkedIn AI Assistant: Content script started");

    // Function to handle Input fields
    const handleMessageInputs = () => {
      const messageInputs = document.querySelectorAll(
        ".msg-form__contenteditable"
      );

      messageInputs.forEach((input) => {
        if (!input.getAttribute("data-ai-assistant")) {
          input.setAttribute("data-ai-assistant", "true");

          // Create icon button
          const iconButton = document.createElement("button");
          iconButton.className = "ai-assistant-icon hidden";
          iconButton.innerHTML = `
           <svg height="20px" width="20px" style="position: absolute;top:10px;right:10px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 451.39 451.39" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="XMLID_28_"> <g> <path style="fill:#FFFFFF;" d="M437.029,439.43c0,0.79-0.31,1.54-0.87,2.1c-1.12,1.11-3.08,1.12-4.2,0l-11.91-11.92l4.2-4.19 l11.91,11.91C436.719,437.89,437.029,438.64,437.029,439.43z"></path> <path d="M18.269,68.58l9.13,9.13l44.94-44.94l-9.13-9.13c-2.51-2.51-5.86-3.9-9.41-3.9c-3.56,0-6.9,1.39-9.41,3.9l-26.12,26.12 c-2.51,2.51-3.9,5.85-3.9,9.41C14.369,62.72,15.759,66.06,18.269,68.58z M280.849,353.05c11.07,11.07,23.02,21.04,35.74,29.88 l60.97-60.97c-8.85-12.72-18.82-24.66-29.89-35.73L105.479,44.04l-66.82,66.82L280.849,353.05z M324.209,388.04 c11.5,7.4,23.59,13.92,36.23,19.49l47.86,21.11l14.96-14.97l-21.1-47.85c-5.57-12.64-12.09-24.74-19.5-36.23L324.209,388.04z M431.959,441.53c1.12,1.12,3.08,1.11,4.2,0c0.56-0.56,0.87-1.31,0.87-2.1c0-0.79-0.31-1.54-0.87-2.1l-11.91-11.91l-4.2,4.19 L431.959,441.53z M442.519,430.97c4.67,4.66,4.67,12.25,0,16.92c-2.33,2.33-5.4,3.5-8.46,3.5s-6.13-1.17-8.46-3.5l-11.91-11.91 l-3.38,3.38l-53.5-23.59c-30.81-13.59-58.51-32.55-82.32-56.36l-255.81-255.8c-2.29-2.3-3.55-5.35-3.55-8.6 c0-3.24,1.26-6.29,3.55-8.59l2.36-2.35l-9.13-9.13c-4.22-4.21-6.54-9.81-6.54-15.77s2.32-11.56,6.54-15.78l26.12-26.11 c4.21-4.22,9.81-6.54,15.77-6.54s11.56,2.32,15.77,6.54l9.13,9.12l2.35-2.34c4.73-4.74,12.44-4.74,17.18,0l26.87,26.87 l10.78-10.78l-33.79-33.79l6.37-6.36l173.59,173.6c10.05,10.04,24.41,14.56,38.4,12.07l1.57,8.86c-3.05,0.54-6.13,0.81-9.18,0.81 c-13.81,0-27.22-5.45-37.15-15.38L142.239,46.51l-10.78,10.78l222.58,222.57c23.81,23.82,42.77,51.51,56.36,82.32l23.58,53.5 l-3.37,3.37L442.519,430.97z M32.299,104.49l66.82-66.82l-7.25-7.25c-0.62-0.61-1.42-0.92-2.23-0.92c-0.81,0-1.61,0.31-2.23,0.92 l-62.36,62.37c-0.6,0.59-0.92,1.38-0.92,2.22c0,0.85,0.32,1.64,0.92,2.23L32.299,104.49z"></path> <path style="fill:#A7B6C4;" d="M382.659,329.59c7.41,11.49,13.93,23.59,19.5,36.23l21.1,47.85l-14.96,14.97l-47.86-21.11 c-12.64-5.57-24.73-12.09-36.23-19.49L382.659,329.59z"></path> <path style="fill:#4489D3;" d="M347.669,286.23c11.07,11.07,21.04,23.01,29.89,35.73l-60.97,60.97 c-12.72-8.84-24.67-18.81-35.74-29.88L38.659,110.86l66.82-66.82L347.669,286.23z"></path> <path style="fill:#A7B6C4;" d="M89.639,29.5c0.81,0,1.61,0.31,2.23,0.92l7.25,7.25l-66.82,66.82l-7.25-7.25 c-0.6-0.59-0.92-1.38-0.92-2.23c0-0.84,0.32-1.63,0.92-2.22l62.36-62.37C88.029,29.81,88.829,29.5,89.639,29.5z"></path> <path style="fill:#4489D3;" d="M44.389,23.64c2.51-2.51,5.85-3.9,9.41-3.9c3.55,0,6.9,1.39,9.41,3.9l9.13,9.13l-44.94,44.94 l-9.13-9.13c-2.51-2.52-3.9-5.86-3.9-9.41c0-3.56,1.39-6.9,3.9-9.41L44.389,23.64z"></path> </g> </g> </g> </g></svg>
          `;

          // Add icon next to input
          const inputContainer = input.parentElement;
          if (inputContainer) {
            inputContainer.style.position = "relative";
            inputContainer.appendChild(iconButton);
          }

          // Show/hide icon based on focus
          input.addEventListener("focus", () => {
            iconButton.classList.remove("hidden");
          });

          input.addEventListener("blur", (e) => {
            if (!e.relatedTarget?.closest(".ai-assistant-icon")) {
              iconButton.classList.add("hidden");
            }
          });

          // Handle icon click
          iconButton.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            showModal(input as HTMLElement);
          });
        }
      });
    };

    // Create and mount modal
    const showModal = (inputField: HTMLElement) => {
      console.log("HI");

      // Parent Container
      const parentContainer = document.createElement("div");
      parentContainer.style.position = "fixed";
      parentContainer.style.top = "50%";
      parentContainer.style.left = "50%";
      parentContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      parentContainer.style.transform = "translate(-50%, -50%)";
      parentContainer.style.width = "500px";
      parentContainer.style.zIndex = "1000";
      parentContainer.style.display = "flex";
      parentContainer.style.flexDirection = "column";
      parentContainer.style.backgroundColor = "white";
      parentContainer.style.borderRadius = "8px";

      // Chat Box
      const chatContainer = document.createElement("div");
      chatContainer.style.flex = "1";
      chatContainer.style.padding = "10px 20px";
      chatContainer.style.overflowY = "auto";
      chatContainer.style.maxHeight = "200px";
      chatContainer.style.display = "none";

      // Input Modal
      const modal = document.createElement("div");
      modal.style.padding = "20px";
      modal.style.marginTop = "10px";

      // Input Field
      const modalInput = document.createElement("input");
      modalInput.type = "text";
      modalInput.placeholder = "Your prompt...";
      modalInput.style.width = "100%";
      modalInput.style.padding = "10px";
      modalInput.style.outline = "none";
      modalInput.style.marginBottom = "10px";
      modalInput.style.borderRadius = "4px";

      // Generate Button
      const generateButton = document.createElement("button");
      generateButton.textContent = "Generate";
      generateButton.style.padding = "10px 20px";
      generateButton.style.border = "none";
      generateButton.style.backgroundColor = "#3b82f6";
      generateButton.style.color = "white";
      generateButton.style.borderRadius = "4px";
      generateButton.style.cursor = "pointer";

      // Insert button, initially hidden
      const insertButton = document.createElement("button");
      insertButton.textContent = "Insert";
      insertButton.style.padding = "10px 20px";
      insertButton.style.border = "1px solid #ccc";
      insertButton.style.color = "gray";
      insertButton.style.borderRadius = "4px";
      insertButton.style.cursor = "pointer";
      insertButton.style.marginRight = "10px";
      insertButton.style.display = "none";

      // Button container for alignment
      const buttonContainer = document.createElement("div");
      buttonContainer.style.display = "flex";
      buttonContainer.style.justifyContent = "flex-end";
      buttonContainer.style.marginTop = "10px";

      // Flag to track whether it's the first click or a regeneration
      let isGenerated = false;

      // Function to add a new message to the chat container
      const addChatMessage = (message, isResponse = false) => {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageDiv.style.margin = "10px 0";
        messageDiv.style.padding = "8px";
        messageDiv.style.borderRadius = "4px";
        messageDiv.style.backgroundColor = isResponse ? "#dbeafe" : "#dfe1e7";
        messageDiv.style.textAlign = isResponse ? "left" : "right";
        messageDiv.style.marginRight = isResponse ? "50px" : "0";
        messageDiv.style.marginLeft = isResponse ? "0" : "50px";

        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      };

      // Hardcoded the current response value
      let currentResponseValue =
        "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask";

      // Handle submit and regenerate button clicks
      generateButton.addEventListener("click", () => {
        const inputValue = modalInput.value;

        if (inputValue) {
          // Append user's input to the chat
          addChatMessage(inputValue);

          // Show the thank-you response after user's input
          addChatMessage(
            "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
            true
          );

          modalInput.value = "";

          if (!isGenerated) {
            generateButton.textContent = "Regenerate";
            insertButton.style.display = "block";
            isGenerated = true;
            chatContainer.style.display = "block";
          }
        }
      });

      // Insert button
      insertButton.addEventListener("click", () => {
        const messageInputs = document.querySelectorAll(
          ".msg-form__contenteditable"
        );
        // console.log(messageInputs);
        // console.log("Insert clicked");
        // console.log("Input Response:", currentResponseValue);

        messageInputs.forEach((input) => {
          const firstChild = input.firstChild;
          const lastChild = input.lastChild;
          input.ariaLabel = "";
          if (firstChild) {
            firstChild.textContent = currentResponseValue;
          }

          if (lastChild) {
            lastChild.textContent = currentResponseValue;
          }

          document.body.removeChild(parentContainer);
        });
      });

      // Detect click outside modal or chat container to close them
      document.addEventListener("click", (event) => {
        if (
          !modal.contains(event.target as Node) &&
          !chatContainer.contains(event.target as Node)
        ) {
          document.body.removeChild(parentContainer);
        }
      });

      // Append the input field and buttons to the button container
      buttonContainer.appendChild(insertButton);
      buttonContainer.appendChild(generateButton);

      // Append the input field, button container to the modal
      modal.appendChild(modalInput);
      modal.appendChild(buttonContainer);

      // Append chat container and modal to the parent container
      parentContainer.appendChild(chatContainer);
      parentContainer.appendChild(modal);

      // Append the parent container to the body
      document.body.appendChild(parentContainer);
    };

    // Set up observer for dynamic content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          handleMessageInputs();
        }
      });
    });

    // Start observing
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial check for inputs
    handleMessageInputs();
  },
});
