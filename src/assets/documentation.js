export default [
  {
    topic: "installation",
    id: "install",
    intro: {
      title: "install the App",
      text: [
        `This app is free to use on your Monday.com workspace view. 
            You can find the app by searching for <strong>Item Visualizer</strong>
            in the marketplace or you can simply click on the button to the left
            `,
      ],
      button: `<a href="https://auth.monday.com/oauth2/authorize?client_id=c402136ecfc3e375135e5002cb9ebaa0&response_type=install"> <img alt="Add to monday.com" height="42" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png" /> </a>`,
    },
    section: [
      {
        title: "Add the App",
        image: require("./img/1.png"),
        text: [
          `Now that you have successfully installed the app, head 
            on over to the workspace of your choosing. Where it says <strong>Main Table</strong> with an arrow 
            facing down, press the arrow and press <strong> + Add View</strong> and select <strong>Apps</strong> in the drop down menu.`,
        ],
      },
      {
        image: require("./img/2.png"),
        text: [
          `Once the <strong>Views Center</strong> opens, search for 
            <strong>Item Visualizer</strong> and select <strong>Add to Board</strong>.
            This should automatically load the app for that workspace. You can assign
            it a different name if you like.`,
        ],
      },
    ],

    outro: {
      text: [
        "At this point, you have successfully installed and added the <b>Item Visualizer</b> for your workspace View App",
      ],
    },
  },
  {
    topic: "Show the Website",
    id: "show-the-website",
    intro: {
      image: require("./img/3.png"),
      text: [
        `This method let's you generate a screenshot of public websites
            in different viewports such as desktop, tablet, and mobile in a full page 
            if you choose.`,
        `This is definitely beneficial for designers and 
            product managers that want to markup up the website for 
            design iterations, and copy changes to be sent off 
            for iterative changes and even development. You can create markups directly and 
            submit that into your description for your team!`,
      ],
    },
    section: [
      {
        title: "To get a screenshot",
        text:
          "There are some steps you must do to properly get a screenshot of a website.",
        list: [
          {
            1: {
              text:
                "Enter the full URL into the box. For example: <strong>https://www.example.com</strong>",
              image: require("./img/path.png"),
            },
            2: {
              text: `Select the viewport you would like. By default, <strong>Desktop</strong> has already been
                        chosen, but you can select <strong>Tablet</strong> or <strong>Mobile</strong> to get
                        a screenshot in that viewport`,
              image: require("./img/viewport.png"),
            },
            3: {
              text:
                "The last option is the <strong>Full page</strong> option. By default, it is selected as <strong>no</strong>, but if you would like a screenshot of the full page, select <strong>yes</strong>.",
              image: require("./img/flpage.png"),
            },
          },
        ],
        gallery: [
          {
            image: require("./img/desktop_1.png"),
            text:
              "<strong>Viewport</strong>: Desktop <strong>Fullpage</strong>: No",
          },
          {
            image: require("./img/desktop.png"),
            text:
              "<strong>Viewport</strong>: Desktop <strong>Fullpage</strong>: Yes",
          },
          {
            image: require("./img/tablet_0.png"),
            text:
              "<strong>Viewport</strong>: Tablet <strong>Fullpage</strong>: No",
          },
          {
            image: require("./img/tablet.png"),
            text:
              "<strong>Viewport</strong>: Tablet <strong>Fullpage</strong>: Yes",
          },
          {
            image: require("./img/mobile_0.png"),
            text:
              "<strong>Viewport</strong>: Mobile <strong>Fullpage</strong>: No",
          },
          {
            image: require("./img/mobile.png"),
            text:
              "<strong>Viewport</strong>: Mobile <strong>Fullpage</strong>: Yes",
          },
        ],
      },
    ],
    outro: {
      text: [
        "After the website URL has finished generating, the app should take you directly to the summary section",
      ],
    },
  },
  {
      topic: "Show the Idea",
      id: "show-the-idea",
      intro: {
          text: [
              `Have a prototype? Or an Idea? How do you show it?`,
              `This method will attach an image from something you may 
              already have. <strong>URL</strong> will support cloud design
              app's public URL or a public image URL, <strong>Upload</strong> will
              work with any file or screen grab, and <strong>Capture</strong> will let 
              you screenshot from your webcam or screen.
              `
          ],
          image: require('./img/showtheidea.jpg')
      }
  },
  {
      topic: "Show the Idea > URL",
      id: "show-the-idea-url",
      intro: {
          text: [`The <strong>URL</strong> tab supports different types of design
          tool services such as XD, Figma, Invision and more. Simply enter 
          the URL into the box and press <strong>Attach</strong>. Before are some 
          supported URL guides`],
          image: require('./img/url.png')
      },
      section: [
          {
              title: "Adobe XD",
              text: `Our API will pull out a thumbnail image, title, and 
              the last modified date to add to the update. To get the URL, 
              head on over to your XD app and press <strong>Share</strong> to 
              get the public link. `,
              image: require('./img/xd-step.jpg'),
              video: require('./videos/xd.mp4')
          },
          {
              title: "Figma",
              text: [`Our API will pull out a thumbnail image, 
              title, and the last modified date to add to the update. In Figma, 
              share your prototype and click <strong>Copy Link</strong> to get the URL`],
              image: require('./img/figma-1.jpg'),
              video: require('./videos/figma.mp4')
          },
          {
              title: "Anima App",
              text: [`The API generates a screenshot for the thumbnail, 
              and to get the URL, head on over to your Anima app's prototype and click share and then Prototype link to get the 
              URL. `],
              image: require('./img/animapp.jpg'),
              video: require('./videos/animapp.mp4')
          },
          {
              title: "Invision",
              text: [ 
              `The API generates a screenshot for the thumbnail. To get the URL, 
              you hover over your prototype and click share. Once you do, there's an 
              option on the bottom of the popup to copy the link.`],
              image: require('./img/invisio.jpg'),
              video: require('./videos/invision.mp4')
          },
          {
              title: "Google Drive",
              text: [
                  `The API will generate a screenshot for the thumbnail. To get the URL, 
                  share your google drive file and make sure it's accessible to anyone on the internet 
                  and copy the URL.`

              ],
              image: require('./img/google.png'),
              video: require('./videos/drive.mp4')
          },
          {
              title: "Image URLs",
              text: [
                  `It also supports URL of public images that end in image extensions such as .jpg and .png. Simply paste the full path and it 
                  would bring it over. `
              ]
          }
      ],
  },
  {
      topic: "Show the Idea > Upload",
      id: "show-the-idea-upload",
      intro: {
          text: [
              `The <strong>Upload</strong> is for files that you already have and would like 
              to send to an update. You can either manually upload the file, drag the file,
              or conveniently paste the image file into the section.`
          ],
          image: require('./img/upload.png')
      },
      section: [
          {
            title: "Uploading a File",
            text: [`You can manually upload a file from your hard drive or simply
            drag and drop the file into the drop area. `],
            video: require('./videos/dragPic.mp4')
          },
          {
              title: "Copying and Pasting an Image",
              text: [`Other than images in the hard drive, you can also copy images and paste 
              them into the drop area.`],
              video: require('./videos/pastePic.mp4')
          }
      ]
  },
  {
      topic: "Show the Idea > Capture",
      id: "show-the-idea-capture",
      intro: {
          text: ["Capture a screenshot of your screen or snap a picture from your camera. The top picture is the live stream, and the bottom is the captured still. You can repeatedly press capture until you get the perfect shot."],
          image: require('./img/capture.png')
      }, 
      section: [
          {
              title: "Capturing from your Screen",
              text: ["To initiate the live screen capture, select the <strong>screen</strong> button. This allows capturing from different monitors, applications, and browser tabs. Once you have the picture you want, there is a button over the image to <strong>Save and Continue</strong>."],
              video: require('./videos/captureScreen.mp4')
          },
          {
              title: "Capturing From Your Camera",
              text: ["To initiate the camera, click on the camera button. The browser will ask to grant permission to use your webcam. You must agree to continue. Once you do, your camera will be on, and all you need to do to capture a screenshot is to press capture. Once you have the picture you want, there is a button over the image to <strong>Save and Continue</strong>."],
              video: require('./videos/captureCamera.mp4')
          }
      ]
  },
  {
      topic: "Show the Video",
      id: "show-the-video",
      intro: {
          text: [`Sometimes images doesn't do the job and you need to send a video recording. There are two buttons to choose from: <strong>Camera</strong> and <strong>Screen</strong>.`],
          image: require('./img/showVid.png')
      },
      section: [
          {
              title: "Show the Video by Screen",
              text: "Recording a video of your screen, application, or browser tab will access your microphone"
          }
      ]
  }
];
