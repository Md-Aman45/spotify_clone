// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
//     >
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               pages/index.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";

const songs = [
  { id: 1, title: "Chill Vibes", artist: "Lo-Fi Beats", file: "/songs/chill-vibes.mp3", cover: "/images/chill.jpg", color: "#8A2BE2" },
  { id: 2, title: "Night Drive", artist: "Synthwave", file: "/songs/night-drive.mp3", cover: "/images/night-drive.jpg", color: "#1DB954" },
  { id: 3, title: "Energy Boost", artist: "EDM", file: "/songs/energy.mp3", cover: "/images/energy-boost.jpg", color: "#E9446A" },
  { id: 4, title: "Jazz Classics", artist: "Jazz Ensemble", file: "/songs/jazz.mp3", cover: "/images/jazz.jpg", color: "#3498db" },
  { id: 5, title: "Rock Anthems", artist: "Rock Legends", file: "/songs/rock.mp3", cover: "/images/rock.jpg", color: "#e74c3c" },
  { id: 6, title: "Pop Hits", artist: "Pop Stars", file: "/songs/pop.mp3", cover: "/images/pop-hit.jpg", color: "#f1c40f" },
  { id: 7, title: "Ambient Sounds", artist: "Nature Vibes", file: "/songs/space-ambient.mp3", cover: "/images/Ambient-Sounds.jpg", color: "#2ecc71" },
  { id: 8, title: "Classical Symphony", artist: "Orchestra", file: "/songs/classical-music.mp3", cover: "/images/classic.jpg", color: "#9b59b6" },
  { id: 9, title: "Hip Hop Beats", artist: "Urban Artists", file: "/songs/hip-hop.mp3", cover: "/images/hip-hop.jpg", color: "#34495e" },
  { id: 10, title: "Electronic Mix", artist: "DJ Masters", file: "/songs/electronic.mp3", cover: "/images/electronic.jpg", color: "#16a085" },
  { id: 11, title: "Reggae Vibes", artist: "Island Rhythms", file: "/songs/ragge.mp3", cover: "/images/ragge.jpg", color: "#27ae60" },
  { id: 12, title: "Workout Playlist", artist: "Fitness Beats", file: "/songs/workout.mp3", cover: "/images/workout.jpg", color: "#d35400" },
];

// Define music categories
const categories = [
  { id: 'all', name: 'All Music' },
  { id: 'lofi', name: 'Lo-Fi' },
  { id: 'electronic', name: 'Electronic' },
  { id: 'jazz', name: 'Jazz' },
  { id: 'rock', name: 'Rock' },
  { id: 'classical', name: 'Classical' },
];

// Assign categories to songs
const songsWithCategories = songs.map(song => ({
  ...song,
  categories: [
    // Assign categories based on song title or artist
    song.title.toLowerCase().includes('chill') || song.artist.toLowerCase().includes('lo-fi') ? 'lofi' : null,
    song.title.toLowerCase().includes('electronic') || song.title.toLowerCase().includes('energy') ? 'electronic' : null,
    song.title.toLowerCase().includes('jazz') ? 'jazz' : null,
    song.title.toLowerCase().includes('rock') ? 'rock' : null,
    song.title.toLowerCase().includes('classical') || song.artist.toLowerCase().includes('orchestra') ? 'classical' : null,
  ].filter(Boolean) // Remove null values
}));

export default function Home() {
  const [current, setCurrent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7); // Default volume at 70%
  const [activeCategory, setActiveCategory] = useState('all');
  const [visualizerBars, setVisualizerBars] = useState([]);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef(null);
  const visualizerRef = useRef(null);
  
  // Filter songs based on active category
  const filteredSongs = activeCategory === 'all' 
    ? songsWithCategories 
    : songsWithCategories.filter(song => 
        song.categories.includes(activeCategory) || song.categories.length === 0
      );
  
  useEffect(() => {
    if (current && audioRef.current) {
      const audio = audioRef.current;
      
      const updateProgress = () => {
        const value = (audio.currentTime / audio.duration) * 100 || 0;
        setProgress(value);
        setDuration(audio.duration);
      };
      
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => {
        setIsPlaying(false);
        // Handle repeat or play next song
        if (isRepeat) {
          // Replay the current song
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play()
              .then(() => setIsPlaying(true))
              .catch(err => console.error('Error replaying audio:', err));
          }
        } else {
          // Auto play next song when current song ends
          const currentIndex = songs.findIndex(song => song.id === current.id);
          const nextIndex = isShuffle ? 
            Math.floor(Math.random() * songs.length) : 
            (currentIndex + 1) % songs.length;
          setCurrent(songs[nextIndex]);
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(err => console.error('Error playing audio:', err));
            }
          }, 500);
        }
      };
      
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);
      
      // Set the volume
      audio.volume = volume;
      
      // Try to play the audio when a new song is selected
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.error('Error auto-playing audio:', err);
          setIsPlaying(false);
        });
      
      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [current, songs, volume]);
  
  // Create and update visualizer
  useEffect(() => {
    // Generate random bars for visualizer
    const generateBars = () => {
      if (!isPlaying) return;
      
      const bars = [];
      const barCount = 20;
      
      for (let i = 0; i < barCount; i++) {
        // Generate random height between 10% and 100%
        const height = isPlaying ? 
          Math.floor(Math.random() * 90) + 10 : 5;
        bars.push(height);
      }
      
      setVisualizerBars(bars);
    };
    
    // Update visualizer at regular intervals when playing
    let interval;
    if (isPlaying) {
      interval = setInterval(generateBars, 100);
      generateBars(); // Initial generation
    } else {
      // Set all bars to minimum height when paused
      setVisualizerBars(Array(20).fill(5));
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);
  
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => {
            console.error('Error playing audio:', err);
            setIsPlaying(false);
          });
      }
    }
  };
  
  const playNextSong = () => {
    if (current) {
      const currentIndex = songs.findIndex(song => song.id === current.id);
      
      if (isShuffle) {
        // Play a random song that's not the current one
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentIndex && songs.length > 1);
        
        setCurrent(songs[randomIndex]);
      } else {
        // Play the next song in sequence
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrent(songs[nextIndex]);
      }
    } else if (songs.length > 0) {
      setCurrent(songs[0]);
    }
  };
  
  const playPreviousSong = () => {
    if (current) {
      const currentIndex = songs.findIndex(song => song.id === current.id);
      
      if (isShuffle) {
        // Play a random song that's not the current one
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentIndex && songs.length > 1);
        
        setCurrent(songs[randomIndex]);
      } else {
        // Play the previous song in sequence
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrent(songs[prevIndex]);
      }
    } else if (songs.length > 0) {
      setCurrent(songs[songs.length - 1]);
    }
  };
  
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleProgressChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setProgress(newValue);
    if (audioRef.current && duration > 0) {
      // Ensure we have a valid duration and calculate a valid time value
      const calculatedTime = (newValue / duration) * duration;
      if (isFinite(calculatedTime)) {
        audioRef.current.currentTime = calculatedTime;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold flex items-center">
          <span className="text-green-500 mr-2">♫</span> Spotify Clone
        </h1>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
            <span className="font-medium">Premium</span>
          </div>
        </div>
      </header>
      
      {/* Category Filter */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === category.id 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="text-green-500 mr-2">▶</span> {activeCategory === 'all' ? 'All Music' : categories.find(c => c.id === activeCategory)?.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSongs.map((song) => (
            <div
              key={song.id}
              className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer group"
              onClick={() => setCurrent(song)}
              style={{
                borderLeft: `4px solid ${song.color}`,
                boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05) inset`
              }}
            >
              <div className="relative">
                <img 
                  src={song.cover} 
                  alt={song.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    className="bg-green-500 rounded-full p-3 transform hover:scale-110 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrent(song);
                      setTimeout(() => {
                        if (audioRef.current) {
                          audioRef.current.play();
                          setIsPlaying(true);
                        }
                      }, 100);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{song.title}</h3>
                <p className="text-gray-400">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {current && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-lg border-t border-gray-800 p-4 shadow-lg">
          {/* Audio Visualizer */}
          <div className="absolute top-0 left-0 right-0 flex justify-center items-end h-2 overflow-hidden transform -translate-y-full">
            <div ref={visualizerRef} className="flex items-end space-x-px h-full w-full">
              {visualizerBars.map((height, index) => (
                <div 
                  key={index} 
                  className="w-full bg-green-500 opacity-80" 
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <img src={current.cover} alt={current.title} className="w-14 h-14 rounded-md mr-4 shadow-lg" />
              <div>
                <h3 className="font-bold text-lg">{current.title}</h3>
                <p className="text-gray-400 text-sm">{current.artist}</p>
              </div>
            </div>
            
            <div className="flex-1 max-w-xl mx-4 w-full">
              <div className="flex items-center justify-center space-x-6">
                <button 
                  className="text-gray-400 hover:text-white transition"
                  onClick={playPreviousSong}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  className="bg-white rounded-full p-3 transform hover:scale-105 transition"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                
                <button 
                  className="text-gray-400 hover:text-white transition"
                  onClick={playNextSong}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progress} 
                  onChange={handleProgressChange}
                  className="mx-2 flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${current.color} 0%, ${current.color} ${progress}%, #4B5563 ${progress}%, #4B5563 100%)`
                  }}
                />
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                </svg>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-20 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <button 
                onClick={() => setIsShuffle(!isShuffle)} 
                className={`p-2 rounded-full ${isShuffle ? 'text-green-500 bg-green-500 bg-opacity-20' : 'text-gray-400 hover:text-white'} transition`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button 
                onClick={() => setIsRepeat(!isRepeat)} 
                className={`p-2 rounded-full ml-2 ${isRepeat ? 'text-green-500 bg-green-500 bg-opacity-20' : 'text-gray-400 hover:text-white'} transition`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v7h7M4 11v7h7m8-8V4m0 7V4m0 7v7" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
          <audio ref={audioRef} src={current.file} className="hidden" />
        </div>
      )}
    </div>
  );
}