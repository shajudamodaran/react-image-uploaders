import React, { useState } from "react";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import Webcam from "@uppy/webcam";
import ImageEditor from "@uppy/image-editor";
import GoogleDrive from "@uppy/google-drive";
import Dropbox from "@uppy/dropbox";
import OneDrive from "@uppy/onedrive";
import Url from "@uppy/url";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/image-editor/dist/style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function ImageEditor1() {
    const [isLoaded, setLoaded]=useState(false)
  const styles = {
    backgroundColor: "orange",
    width: "fit-content",
    height: "auto",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const uppy = React.useMemo(() => {
    return new Uppy()
    //   .use(Webcam)
      .use(Url, { companionUrl: " https://companion.uppy.io" })
      .use(ImageEditor, {
        cropperOptions: {
          viewMode: 1,
          background: false,
          autoCropArea: 1,
          responsive: true,
          croppedCanvasOptions: {},
        },
        actions: {
          revert: true,
          rotate: true,
          granularRotate: true,
          flip: true,
          zoomIn: true,
          zoomOut: true,
          cropSquare: true,
          cropWidescreen: true,
          cropWidescreenVertical: true,
        },
      })
      .use(ImageEditor, { id: "MyImageEditor" })
      .use(GoogleDrive, { companionUrl: "http://localhost:3000" })
      .use(Dropbox, { companionUrl: "http://localhost:3000" })
      .use(OneDrive, { companionUrl: "http://localhost:3000" });
  }, [isLoaded]);
  React.useEffect(() => {
    setLoaded(true)
    return () => uppy.close();
  }, []);

  uppy.on("complete", () => {
    
  });

  uppy.on("error", () => {
    
  });

  return (
    <div>
     
      <Dashboard
        style={styles}
        uppy={uppy}
        plugins={[
          "Webcam",
          "ImageEditor",
          "GoogleDrive",
          "Dropbox",
          "OneDrive",
        ]}
      />
    </div>
  );
}

export default ImageEditor1;
