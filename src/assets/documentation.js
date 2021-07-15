export default [
  {
    topic: "Installation",
    id: "install",
    intro: {
      title: "Install the App",
      text: [
        "First you need to be a member with <a href='https://www.monday.com'>Monday</a> to be able to use this app.",
        `This app is free to use on your Monday.com workspace view. 
            You can find the app here: <a href="https://monday.com/marketplace/105">Item Visualizer on Monday.com Marketplace</a>
            or you can simply click on the button below to install it directly.
            `,
        `<a href="https://auth.monday.com/oauth2/authorize?client_id=c402136ecfc3e375135e5002cb9ebaa0&response_type=install"> <img alt="Add to monday.com" height="42" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png" /> </a>`,
      ],
    },
    section: [
      {
        title: "Add the App",
        image: {
          src: require("./img/1.png"),
          alt: "How to Add the App step 1",
        },
        video: {
          src: require("./videos/install.mp4"),
          alt: "Adding the View App",
        },
        text: [
          `Now that you have successfully installed the app, head 
            on over to the workspace of your choosing. Where it says <strong>Main Table</strong> with an arrow 
            facing down, press the arrow and press <strong> + Add View</strong> and select <strong>Apps</strong> in the drop down menu.`,
        ],
      },
      {
        image: {
          src: require("./img/2.png"),
          alt: "How to add the App step 2",
        },
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
    topic: "Initializing the Camera and Microphone",
    id: "initialize",
    intro: {
      text: [
        `Some of the features require the user to give access to the camera and microphone.`,
        `The prompt will ask for your permission, and 
      if rejected, there is still a chance to give access.`,
      
      ],
      image: {src: require('./img/initiateVid.jpg'), alt: "Activate to use these features"}
    },
    section: [
      {
        title: "Give Access",
        text: [
          `Some features require only your microphone or camera while another may require both your microphone and camera. 
      You may need to check if Camera and/or microphone is blocked.`,
        ],
        list: [
          {
            text: `First prompt will look like the image below with Chrome. Please press <strong>allow</strong> to grant this app access.`,
            image: {
              src: require("./img/initiateVid1.jpg"),
              alt: "Allow Camera and Microphone with Chrome",
            },
          },
          {
            text: `If it never gave you a prompt or you declined to give access for chrome, you may receive an error about not giving access to the app. There's still 
            a chance which is at the end of the address bar.`,
            image: {
              src: require("./img/initiateVid2.jpg"),
              alt: "Second Chance to Give Access from Chrome",
            },
          },
          {
            text: `First prompt will look like the image below for Firefox. Please check <strong>Remember this decision</strong> and press <strong>allow</strong> to grant this app access.`,
            image: {
              src: require("./img/initiateVid3.jpg"),
              alt: "Allow Camera and Microphone with Firefox",
            },
          },
          {
            text: `If it never gave you a prompt or you declined to give access for Firefox, you can head on over to your 
          address bar click the camera and microphone to remove your blocks and try again.`,
            image: {
              src: require("./img/initiateVid4.jpg"),
              alt: "Second Chance to Give Access from Firefox",
            },
          },

        ],
      },
    ],
  },
  {
    topic: "Using Your Media Keys",
    id: "media-keys",
    intro: {
      text: [
        `This app supports the play and pause media keys on your keyboard for video elements on our app.`,
        `The media keys are different depending on the keyboard, so make sure you get the correct one.`
      ],
      image: {src: "https://deskthority.net/wiki/images/0/01/Logitech_Y-RJ20_--_audio_control_panel.jpg", alt: "Image of a keyboard"}
    },
    section: [
      {
        title: "Using it for capturing a screenshot",
        text: [
          `You can access the media keys with Show The Idea > Capture`,
          `To work with users that are unable to press the capture button,
          you can use your media key (play or pause) to initiate a capture.`
        ],
        video: {src: require('./videos/keypress.mp4'), alt: "Capturing screenshot"}
      },
      {
        title: "Use it for ending your recording",
        text: [
          `You can access the media keys with Show the Video`,
          `Once you have already started recording, instead of pressing the stop recording
          button, you can use your media key (play or pause) instead.`
        ]
      }
    ]
  },

  {
    topic: "Show The Website",
    id: "show-the-website",
    intro: {
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/b_IXUVyQL4o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      image: { src: require("./img/3.png"), alt: "Show the Website" },
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
        text: [
          "There are some steps you must do to properly get a screenshot of a website.",
        ],
        list: [
          {
            text:
              "Enter the full URL into the box. For example: <strong>https://www.example.com</strong>",
            image: { src: require("./img/path.png"), alt: "enter url" },
          },

          {
            text: `Select the viewport you would like. By default, <strong>Desktop</strong> has already been
                        chosen, but you can select <strong>Tablet</strong> or <strong>Mobile</strong> to get
                        a screenshot in that viewport`,
            image: {
              src: require("./img/viewport.png"),
              alt: "Choosing a viewport",
            },
          },
          {
            text:
              "The last option is the <strong>Full page</strong> option. By default, it is selected as <strong>no</strong>, but if you would like a screenshot of the full page, select <strong>yes</strong>.",
            image: {
              src: require("./img/flpage.png"),
              alt: "select full page",
            },
          },
        ],
        gallery: [
          {
            image: { src: require("./img/desktop_1.png"), alt: "Desktop" },
            text:
              "<strong>Viewport</strong>: Desktop <strong>Fullpage</strong>: No",
          },
          {
            image: {
              src: require("./img/desktop.png"),
              alt: "Desktop Full Page",
            },
            text:
              "<strong>Viewport</strong>: Desktop <strong>Fullpage</strong>: Yes",
          },
          {
            image: { src: require("./img/tablet_0.png"), alt: "Tablet" },
            text:
              "<strong>Viewport</strong>: Tablet <strong>Fullpage</strong>: No",
          },
          {
            image: {
              src: require("./img/tablet.png"),
              alt: "Tablet Full Page",
            },
            text:
              "<strong>Viewport</strong>: Tablet <strong>Fullpage</strong>: Yes",
          },
          {
            image: { src: require("./img/mobile_0.png"), alt: "Mobile" },
            text:
              "<strong>Viewport</strong>: Mobile <strong>Fullpage</strong>: No",
          },
          {
            image: {
              src: require("./img/mobile.png"),
              alt: "Mobile Full Page",
            },
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
    topic: "Show The Idea",
    id: "show-the-idea",
    intro: {
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/q5DJc0kNPcs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      text: [
        `Have a prototype? Or an Idea? How do you show it?`,
        `This method will attach an image from something you may 
              already have. <strong>URL</strong> will support cloud design
              app's public URL or a public image URL, <strong>Upload</strong> will
              work with any file or screen grab, and <strong>Capture</strong> will let 
              you screenshot from your webcam or screen.
              `,
      ],
      image: { src: require("./img/showtheidea.jpg"), alt: "Show the Idea" },
    },

    categories: [
      {
        topic: "Show The Idea > URL",
        id: "show-the-idea-url",
        intro: {
          text: [
            `The <strong>URL</strong> tab supports different types of design
          tool services such as XD, Figma, Invision and more. Simply enter 
          the URL into the box and press <strong>Attach</strong>. Before are some 
          supported URL guides`,
          ],
          image: {
            src: require("./img/url.png"),
            alt: "Show the Idea with URL",
          },
        },
        section: [
          {
            title: "Adobe XD",
            text: [
              `Our API will pull out a thumbnail image, title, and 
              the last modified date to add to the update. To get the URL, 
              head on over to your XD app and press <strong>Share</strong> to 
              get the public link. `,
            ],
            image: {
              src: require("./img/xd-step.jpg"),
              alt: "Screenshot to get XD URL",
            },
            video: { src: require("./videos/xd.mp4"), alt: "App with XD URL" },
          },
          {
            title: "Figma",
            text: [
              `Our API will pull out a thumbnail image, 
              title, and the last modified date to add to the update. In Figma, 
              share your prototype and click <strong>Copy Link</strong> to get the URL`,
            ],
            image: {
              src: require("./img/figma-1.jpg"),
              alt: "Screenshot to get Figma URL",
            },
            video: {
              src: require("./videos/figma.mp4"),
              alt: "App with Figma URL",
            },
          },
          {
            title: "Anima App",
            text: [
              `The API generates a screenshot for the thumbnail, 
              and to get the URL, head on over to your Anima app's prototype and click share and then Prototype link to get the 
              URL. `,
            ],
            image: {
              src: require("./img/animapp.jpg"),
              alt: "Screenshot to get Anima App's URL",
            },
            video: {
              src: require("./videos/animapp.mp4"),
              alt: "App with Anima App URL",
            },
          },
          {
            title: "Invision",
            text: [
              `The API generates a screenshot for the thumbnail. To get the URL, 
              you hover over your prototype and click share. Once you do, there's an 
              option on the bottom of the popup to copy the link.`,
            ],
            image: {
              src: require("./img/invisio.jpg"),
              alt: "Screenshot to get Invision URL",
            },
            video: {
              src: require("./videos/invision.mp4"),
              alt: "App with Invision URL",
            },
          },
          {
            title: "Google Drive",
            text: [
              `The API will generate a screenshot for the thumbnail. To get the URL, 
                  share your google drive file and make sure it's accessible to anyone on the internet 
                  and copy the URL.`,
            ],
            image: {
              src: require("./img/google.png"),
              alt: "Screenshot to get Google Drive Link",
            },
            video: {
              src: require("./videos/drive.mp4"),
              alt: "App with Google Drive link",
            },
          },
          {
            title: "Image URLs",
            text: [
              `It also supports URL of public images that end in an image extensions such as .jpg and .png. Simply paste the full path and it 
                  would bring it over. `,
            ],
          },
        ],
      },
      {
        topic: "Show The Idea > Upload",
        id: "show-the-idea-upload",
        intro: {
          text: [
            `The <strong>Upload</strong> is for files that you already have and would like 
              to send to an update. You can either manually upload the file, drag the file,
              or conveniently paste the image file into the section.`,
          ],
          image: {
            src: require("./img/upload.png"),
            alt: "Show the Idea Upload",
          },
        },
        section: [
          {
            title: "Uploading a File",
            text: [
              `You can manually upload a file from your hard drive or simply
            drag and drop the file into the drop area. `,
            ],
            video: {
              src: require("./videos/dragPic.mp4"),
              alt: "Video of dragging a picture file",
            },
          },
          {
            title: "Copying and Pasting an Image",
            text: [
              `Other than images in the hard drive, you can also copy images and paste 
              them into the drop area.`,
            ],
            video: {
              src: require("./videos/pastePic.mp4"),
              alt: "Video of pasting an image",
            },
          },
        ],
      },
      {
        topic: "Show The Idea > Capture",
        id: "show-the-idea-capture",
        intro: {
          text: [
            "Capture a screenshot of your screen or snap a picture from your camera. The top picture is the live stream, and the bottom is the captured still. You can repeatedly press capture until you get the perfect shot.",
          ],
          image: {
            src: require("./img/capture.png"),
            alt: "Show the Idea Capture",
          },
        },
        section: [
          {
            title: "Capturing from your Screen",
            text: [
              "To initiate the live screen capture, select the <strong>screen</strong> button. This allows capturing from different monitors, applications, and browser tabs. Once you have the picture you want, there is a button over the image to <strong>Save and Continue</strong>.",
            ],
            video: {
              src: require("./videos/captureScreen.mp4"),
              alt: "Video of how to Capture a Screenshot from your screen",
            },
          },
          {
            title: "Capturing From Your Camera",
            text: [
              "To initiate the camera, click on the camera button. The browser will ask to grant permission to use your webcam. You must agree to continue. Once you do, your camera will be on, and all you need to do to capture a screenshot is to press capture. Once you have the picture you want, there is a button over the image to <strong>Save and Continue</strong>.",
            ],
            video: {
              src: require("./videos/captureCamera.mp4"),
              alt: "Video of how to capture a screenshot from your camera",
            },
          },
        ],
      },
    ],
  },

  {
    topic: "Show The Video",
    id: "show-the-video",
    intro: {
      text: [
        `Sometimes images doesn't do the job and you need to send a video recording. There are two buttons to choose from: <strong>Camera</strong> and <strong>Screen</strong>.`,
      ],
      image: { src: require("./img/showVid.png"), alt: "Show the Video" },
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LalyTRtJuWo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },
    section: [
      {
        title: "Show the Video from Screen",
        text: [
          "Click on <strong>Screen</strong> to begin recording a video of your screen, application, or browser tab will access your microphone. When you stop the recording, the video will instantly playback. There will be an option to download the video only after the video finishes playing completely.",
        ],
        video: {
          src: require("./videos/recordScreen.mp4"),
          alt: "Video of how to record from screen",
        },
      },
      {
        title: "Show the Video from Camera",
        text: [
          "Click on <strong>Camera</strong> to start recording a video using your camera. First it will ask to access your microphone and camera, please allow for it to begin recording. There will be an option to download the video only after the video finishes playing completely.",
        ],
        video: {
          src: require("./videos/recordCamera.mp4"),
          alt: "Video of how to record from camera",
        },
      },
    ],
  },
  {
    topic: "The Summary",
    id: "summary",
    intro: {
      text: [
        `This is the preview section after using any of the methods. 
          To the left is the thumbnail image (if it's an image type) and to the right are 
          input fields you can enter with it. If you leave it blank, it won't be included in your
          update.`,
        `In the summary you can also draw on the image with the pencil button on 
          the corner left next to the expand button.`,
        `If your thumbnail has been modified through our 
          drawing canvas, you can reset back to the original by clicking on the circle arrow button.`,
      ],
      image: { src: require("./img/summary.jpg"), alt: "Summary" },
    },
  },
  {
    topic: "Edit The Image",
    id: "summary-draw",
    intro: {
      text: [
        `Once you've clicked on the pencil button to edit the image, you will be directed to 
      a drawing page.`,
        `This canvas let's you control the size and color of either a brush tool or
      a typing tool. There is also an option to <strong>Clear</strong> the canvas, go back by clicking <strong>Cancel</strong>, and if you
      want to save what you've done, click on <strong>Save Image</strong> at the top to generate a new thumbnail image.`,
      ],
      image: { src: require("./img/canvasDraw.jpg"), alt: "Edit the Image" },
    },
    section: [
      {
        title: "To draw on a picture",
        text: [
          `By default, the canvas starts with painting so you could immediately start drawing
        on the canvas. You have a limited number of colors to choose from and you can adjust the 
        size of the brush in the tool section. Once you have the image how you like it, Save the image to return to the summary section.`,
        ],
        video: {
          src: require("./videos/canvasPaint.mp4"),
          alt: "Video of how to draw on the image",
        },
      },
      {
        title: "To Add text on a Picture",
        text: [
          `You can add legible text on the picture as well. In the tool section, select the button <strong>A</strong>, type something 
        in the <strong>Enter Text</strong> input and then you can use your cursor on the canvas
        to add that text onto the image. Once you have the image how you like it, Save the image to return to the summary section.`,
        ],
        video: {
          src: require("./videos/canvasType.mp4"),
          alt: "Video of how to Type on the image",
        },
      },
    ],
  },
  {
    topic: "Send To The Update",
    id: "update",
    intro: {
      text: [
        `The main purpose of having these methods is to send the image, video, or file to the item it 
      pertains to. To send the update, you must be in the summary section. Once you are, you can search for the 
      name of your update, and as you're typing, it should bring down a list of items you could choose from to send an update to.
      Once you click on the item's name, it should automatically send the update to your item.`,
        `If sending an image that 
      was generated or uploaded, it may take some time to send to your item and may require a refresh to view the image that has been 
      attached as an asset to your update. If your image included is hosted elsewhere, the image should be included in the text 
      area of your update.`,
      ],
      image: { src: require("./img/update.jpg"), alt: "Send the update" },
    },
    section: [
      {
        title: "Sending a generated or uploaded image",
        text: [
          `Sending a generated or uploaded image will be uploaded into the assets of your item. 
        Once the image is uploaded, check your item's update for the file. If you don't see it, the update may 
        need a quick refresh.`,
        ],
        video: {
          src: require("./videos/updateGenerated.mp4"),
          alt: "Video of how to send a generated image",
        },
      },
      {
        title: "Sending an update with an image",
        text: [
          `Sending in an update with an image that is hosted elsewhere will be included in your update without
        uploading it into your assets.`,
        ],
        video: {
          src: require("./videos/updateImage.mp4"),
          alt: "Video of how to send an image",
        },
      },
      {
        title: "Sending an update with a video",
        text: [
          `Sending in an update with a video that was created will be sent the same way as a generated image.
        The only difference is that the upload may take longer.`,
          `NOTE: Please download your video to your local
        hard drive before uploading as large video files may fail to upload.`,
        ],
        video: {
          src: require("./videos/updateVideo.mp4"),
          alt: "Video of how to send a video",
        },
      },
      {
        title: "Sending an update with a miscellaneous file",
        text: [
          `You can also upload any file that Monday allows. Depending on the size of the file, it may take a while.`,
          `Warning: The name of the file will be changed 
        during the process.`,
        ],
        video: {
          src: require("./videos/updateMisc.mp4"),
          alt: "Video of how to send a miscellaneous file",
        },
      },
    ],
    outro: {
      text: [
        `This is the very end and hope this has helped you in understanding how to use <strong>Item Visualizer</strong>. Thank you!`,
      ],
    },
  },
];
