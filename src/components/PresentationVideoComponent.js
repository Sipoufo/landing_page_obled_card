import React from "react";

const PresentationVideoComponent = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-screen-lg items-center gap-4">
                <h1 className="text-xl md:text-2xl font-extrabold w-full">
                    Présentation vidéo
                </h1>
                <video class="w-full h-96 max-w-screen-md" controls>
                    <source
                        src={
                            process.env.PUBLIC_URL + "/assets/videos/test.webm"
                        }
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default PresentationVideoComponent;
