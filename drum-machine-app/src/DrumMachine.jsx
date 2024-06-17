// src/DrumMachine.jsx
import React from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

const audioData = [
  { id: 'Heater-1', key: 'Q', src: 'audio/Heater-1.mp3', description: 'Heater 1' },
    { id: 'Heater-2', key: 'W', src: 'audio/Heater-2.mp3', description: 'Heater 2' },
      { id: 'Heater-3', key: 'E', src: 'audio/Heater-3.mp3', description: 'Heater 3' },
        { id: 'Heater-4', key: 'A', src: 'audio/Heater-4_1.mp3', description: 'Heater 4' },
          { id: 'Clap', key: 'S', src: 'audio/Heater-6.mp3', description: 'Clap' },
            { id: 'Open-HH', key: 'D', src: 'audio/Dsc_Oh.mp3', description: 'Open HH' },
              { id: 'Kick-n-Hat', key: 'Z', src: 'audio/Kick_n_Hat.mp3', description: 'Kick n\' Hat' },
                { id: 'Kick', key: 'X', src: 'audio/RP4_KICK_1.mp3', description: 'Kick' },
                  { id: 'Closed-HH', key: 'C', src: 'audio/Cev_H2.mp3', description: 'Closed HH' },
                  ];

                  const DrumMachine = () => {
                    const drumPads = audioData.map(data => (
                        <DrumPad key={data.id} id={data.id} keyTrigger={data.key} src={data.src} description={data.description} />
                          ));

                            return (
                                <div id="drum-machine" className="container">
                                      <Display />
                                            <div className="row mt-3">
                                                    {drumPads}
                                                          </div>
                                                              </div>
                                                                );
                                                                };

                                                                export default DrumMachine;
                                                                