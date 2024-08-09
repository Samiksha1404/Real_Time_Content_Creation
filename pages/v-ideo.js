
'use client';
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import { PlusIcon } from '@heroicons/react/24/solid';
// import next from "@/public/frame-13@3x.png";
import Image from 'next/image';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const VIdeo = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [imageUrls, setImageUrls] = useState([
    "https://via.placeholder.com/800x600.png?text=Image+1",
    "https://via.placeholder.com/800x600.png?text=Image+2",
    "https://via.placeholder.com/800x600.png?text=Image+3",
    "https://via.placeholder.com/800x600.png?text=Image+4"
  ]);
  const recognitionRef = useRef(null);
  const socketRef = useRef(null);
  const accumulationTimerRef = useRef(null);
  const accumulatedTranscriptRef = useRef("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imageUrls.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [imageUrls]);

  const emitTranscript = useCallback(() => {
    if (socketRef.current && accumulatedTranscriptRef.current.trim()) {
      socketRef.current.emit("transcript", accumulatedTranscriptRef.current);
      accumulatedTranscriptRef.current = "";
    }
  }, []);

  useEffect(() => {
    socketRef.current = io("http://localhost:3002");
    console.log("Socket connected");

    socketRef.current.emit("hello", "this is test");

    socketRef.current.on("image", (data) => {
      console.log("Printing image data", data);
      setImageUrls((prev) => [...prev, ...Array.from(new Set(data))]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const startRecording = useCallback(() => {
    setIsRecording(true);
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      const { transcript } = event.results[event.results.length - 1][0];
      setTranscript(transcript);
      accumulatedTranscriptRef.current += " " + transcript;
      console.log("Accumulated Transcript:", accumulatedTranscriptRef.current);
    };

    recognitionRef.current.start();

    if (accumulationTimerRef.current) {
      clearInterval(accumulationTimerRef.current);
    }

    accumulationTimerRef.current = setInterval(() => {
      emitTranscript();
    }, 10000);
  }, [emitTranscript]);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
    if (accumulationTimerRef.current) {
      clearInterval(accumulationTimerRef.current);
    }
    emitTranscript();
  }, [emitTranscript]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (accumulationTimerRef.current) {
        clearInterval(accumulationTimerRef.current);
      }
    };
  }, []);

  const handleToggleRecording = useCallback(() => {
    setIsRecording((prev) => !prev);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  return (
    <div className="w-full h-max pt-[53px] bg-gray1-800 overflow-hidden flex flex-col items-center justify-start mix-blend-normal leading-normal tracking-normal">
      {/* Navbar */}
      <Navbar />

      {/* Left section */}
      <main className="min-h-screen flex items-start justify-center pt-7 w-full mq750:gap-[17px]">
        <div className="w-[40%] h-[44em] p-8 ml-32 mq450:ml-2 mb-10 bg-gray1-600 rounded-2xl mix-blend-normal z-[1] border-[1px] border-solid border-gray1-300 box-border flex flex-col items-center justify-center text-white shadow-md">
          <div className="h-18 mb-8 flex items-center justify-center">
            <button
              className="w-[160px] bg-white-700 text-black text-sm font-medium py-2 px-4 rounded border border-white flex items-center justify-center hover:text-white hover:bg-gray1-300">
              Subscript
              <PlusIcon className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="bg-gray1-300 rounded-xl flex items-center justify-center w-[90%] h-[90%]">
            <p className="text-lg">{transcript}</p>
          </div>
        </div>

        {/* Right Content Section */}
        <section className="w-full flex flex-row items-start justify-center box-border max-w-full [row-gap:20px] text-left text-lg text-white font-inter mq1100:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-center gap-[33px] min-w-[541px] max-w-full mq750:min-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-center relative max-w-full">
              <div className="h-[453px] w-[936px] !m-[0] absolute top-[-176px] right-[-165px] flex flex-row items-start justify-start">
                <div className="h-[474px] w-[944px] absolute !m-[0] top-[-21px] right-[-8px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                    alt=""
                    src="/grid@2x.png"
                  />
                </div>
              </div>
              <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border items-end justify-center z-[1] border-[1px] border-solid border-gray1-300 box-border pt-[35.6px] px-[20px] py-[20px] pb-[35.6px] gap-[54.3px] max-w-full z-[2] border-[0px] border-solid border-gray1-300 mq1100:flex-1 mq450:gap-[27px]">
                <div className="h-[450px] rounded-3xs flex flex-row items-start justify-center bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
                  {imageUrls.length > 0 && (
                    <img
                      className="w-full h-full object-cover"
                      alt={`Generated image ${currentImageIndex}`}
                      src={imageUrls[currentImageIndex]}
                    />
                  )}
                </div>
                <div className="h-[150px] flex flex-row rounded-xl items-start justify-center box-border w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border bg-gray1-300 shadow-md shadow-gray-700">
                  <div className="flex-1 flex flex-row items-start justify-center w-full mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-center gap-[10px]">

                      <div className="self-stretch flex flex-row items-start justify-center">
                        <div className="h-[80px] flex-1 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-darkslategray-100" />
                          <img
                            className="absolute top-[12.2px] mt-4 w-[50px] h-[42.2px] z-[2]"
                            loading="lazy"
                            alt="Microphone"
                            src="/vector-2.svg"
                            onClick={handleToggleRecording}
                            style={{ filter: isRecording ? 'invert(31%) sepia(89%) saturate(7466%) hue-rotate(0deg) brightness(97%) contrast(102%)' : 'none' }}
                          />
                          <img
                            className="absolute top-[12.2px] mt-4 left-[60px] w-[50px] h-[42.2px] z-[2]" // Adjust `left` to position it correctly
                            loading="lazy"
                            alt="Pause"
                            src="/Pause.png" // Replace with actual pause icon path

                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="h-[25.5px] relative leading-[20px] z-[1]">
                          {isRecording ? "Stop" : "Start"}
                        </div>
                        <div className="h-[25.5px] relative leading-[20px] z-[1] ml-4">
                          {isRecording ? "Stop" : "Pause"}
                        </div>
                      </div>
                    </div>
                    <div className="flex  p-12 flex-row gap-[10px]">
                      <button className="bg-gray1-300  border-[1px] border-solid border-white box-border text-white py-2 px-4 rounded hover:bg-gray1-600">
                        Save
                      </button>
                      <button className="bg-white  border-[1px] border-solid border-white text-black py-2 px-4 rounded hover:bg-gray1-300 hover:text-white">
                        Upload
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VIdeo;

