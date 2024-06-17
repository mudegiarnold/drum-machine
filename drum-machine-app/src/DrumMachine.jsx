// src/DrumMachine.jsx
import React from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

const audioData = [
  { id: 'Song1', key: 'Q', src: 'audio/song1.mp3', description: 'Song 1' },
    { id: 'Song2', key: 'W', src: 'audio/song2.mp3', description: 'Song 2' },
      { id: 'Song3', key: 'E', src: 'audio/song3.mp3', description: 'Song 3' },
        // Add more songs as needed
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
                                                      