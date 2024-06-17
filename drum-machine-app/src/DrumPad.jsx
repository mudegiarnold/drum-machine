// src/DrumPad.jsx
import React, { useRef } from 'react';

const DrumPad = ({ id, keyTrigger, src, description }) => {
  const audioRef = useRef(null);

    const playSound = () => {
        audioRef.current.currentTime = 0;
            audioRef.current.play();
                document.getElementById('display').innerText = description;
                  };

                    const handleKeyPress = (event) => {
                        if (event.key.toUpperCase() === keyTrigger) {
                              playSound();
                                  }
                                    };

                                      // Add event listener when component mounts
                                        React.useEffect(() => {
                                            document.addEventListener('keydown', handleKeyPress);
                                                // Clean up event listener when component unmounts
                                                    return () => {
                                                          document.removeEventListener('keydown', handleKeyPress);
                                                              };
                                                                }, []);

                                                                  return (
                                                                      <div className="col-md-4 mb-3">
                                                                            <button className="drum-pad btn btn-primary btn-lg btn-block" id={id} onClick={playSound}>
                                                                                    {keyTrigger}
                                                                                            <audio ref={audioRef} className="clip" id={keyTrigger} src={`audio/${src}`}></audio>
                                                                                                  </button>
                                                                                                      </div>
                                                                                                        );
                                                                                                        };

                                                                                                        export default DrumPad;
