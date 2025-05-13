<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css?v=1.2">
    <link rel="icon" href="image/logo.jpg" type="image/png">
    <title>AD Music Player</title>

    <style>
        .dropdown-content {
      display: none;
      position: absolute;
      top: 80px;
      left: 0;
      background-color: white;
      min-width: 150px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 8px;
      overflow: hidden;
    }

    .dropdown-content a {
      color: #333;
      padding: 10px 15px;
      text-decoration: none;
      display: block;
      transition: background 0.3s;
    }

    .dropdown-content a:hover {
      background-color:rgb(109, 108, 108);
    }

    .profile-menu:hover .dropdown-content {
      display: block;
    }
    </style>
</head>

<body>
    <header>
        <div class="menu_side" >

        <div class="profile-menu">
             <img src="image\A.png"  style="width:40px; height:40px; border-radius:50%; object-fit:cover; margin-left: 20px; margin-top:20px;"alt="Profile">
             <span style="display:flex; align-item:center; text-align:right; font-weight: bold; color: #fff; margin-left: 10px; white-space: nowrap; ">Asmita</span>
         </label>
    <div class="dropdown-content">
      <a href="#">Account</a>
      <a href="#">Profile</a>
      <a href="#">Support</a>
      <a href="#">Settings</a>
      <a href="#">Logout</a>
    </div>
  </div>
  <div class="playlist">
  <h4 ><span></span><i class="bi bi-music-note-beamed"></i>Download</h4>
  <h4 ><span></span><i class="bi bi-music-note-beamed"></i>Last Playing</h4>
            </div>
            <h1 style=" font-size:20px; margin-top:10px;">PlayList</h1>
            <div class="menu_song" style=" margin-top:20px;">
                <li class="songItem">
                    <span>01</span>
                    <img src="image/LMLYD.jpg" alt="Love Me Like You Do Album Cover">
                    <h5>Love Me Like You Do <br><div class="Subtitle">Taylor Swift</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
                </li>
    
                <li class="songItem">
                    <span>02</span>
                    <img src="image/mamoories.jpg" alt="">
                    <h5>Memories <br><div class="Subtitle">Maroon 5</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="2" onclick="playSong(2)"></i>
                </li>
                
                <li class="songItem">
                    <span>03</span>
                    <img src="image/lover.jpeg" alt="">
                    <h5>Lover <br><div class="Subtitle">Tylore Swifft</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
                </li>
                <li class="songItem">
                    <span>04</span>
                    <img src="image/Lavitating.jpeg" alt="">
                    <h5>Lavitating <br><div class="Subtitle">Dua Lipa</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
                </li>
                <li class="songItem">
                    <span>05</span>
                    <img src="image/night-changeg.jpeg" alt="">
                    <h5>Night Changes <br><div class="Subtitle">One Direction</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
                </li>
                <li class="songItem">
                    <span>06</span>
                    <img src="image/faovrite.jpeg" alt="">
                    <h5>Favorite<br><div class="Subtitle">Isabel Larosa</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="6"></i>
                </li>
                <li class="songItem">
                    <span>07</span>
                    <img src="image/perfect.jpeg" alt="">
                    <h5>Perfect<br><div class="Subtitle">Ed Sheeran</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
                </li>
                <li class="songItem">
                    <span>08</span>
                    <img src="image/no-lie.jpeg" alt="">
                    <h5>No Lie<br><div class="Subtitle">Sean Paul</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="8"></i>
                </li>
                <li class="songItem">
                    <span>09</span>
                    <img src="image/closer.jpeg" alt="">
                    <h5>Closer<br><div class="Subtitle">Halsey</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="9"></i>
                </li>
                <li class="songItem">
                    <span>10</span>
                    <img src="image/WMYB.jpeg" alt="">
                    <h5>What Makes You Beautiful<br><div class="Subtitle">One Direction</div></h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="10"></i>
                </li>
            </div>
        </div>

        <div class="song_side">
            <nav>
                <title>Music Player</title>
                <ul>
                    <li>Discover <span></span></li>
                    <a href="#25"><li>RADIO</li></a>
                </ul>
                <div class="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Search Music...">
                </div>
                <div class="user">
                    <img src="image/logo.jpg" alt="">
                </div>
            </nav>
            <div class="content">
                <h1>Sonu Nigam</h1>
                <p> Your tomorrow has no right to complain about your roday, aas long as your today gives you a blis, <br>  unknown and incomprehensible to both your yesterday, and tommorow !. </p>
                <div class="top">
               <img src="image\Sonu nigam.jpeg" style="width:120px; height:120px; border-radius:50%; border:4px solid gray; object-fit:cover;">
              </div>
            </div>

            <div class="popular_song">
                <div class="h4">
                    <h4>Popular Song</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_song_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_song_right"></i>
                    </div>
                </div>
                <div class="pop_song">
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/toba.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="11"></i>
                        </div>
                        <h5>Tohba Tohba <br>
                            <div class="Subtitle">Karan Aujla</div>
                        </h5>
                    </li>

                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/tainu-khabar.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="12"></i>
                        </div>
                        <h5>Tainu Khabar Nahi <br>
                            <div class="Subtitle">Karan Aujla</div>
                        </h5>
                    </li>

                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/tum-se.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="13"></i>
                        </div>
                        <h5>Tum se <br>
                            <div class="Subtitle"> Sachin-Jigar, Raghav Chaitanya, Varun Jain</div>
                        </h5>
                    </li>

                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/o-meri-laila.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="14"></i>
                        </div>
                        <h5>O Mari Laila<br>
                            <div class="Subtitle">Atif Aslam , Jyotica Tangri</div>
                        </h5>
                    </li>

                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/satranga.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="15"></i>
                        </div>
                        <h5>Satranga <br>
                            <div class="Subtitle">Arjit Singh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/nadaniya.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="16"></i>
                        </div>
                        <h5>Nadaniya <br>
                            <div class="Subtitle">Akshath Acharya</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/heeriye.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="17"></i>
                        </div>
                        <h5>Heeriye <br>
                            <div class="Subtitle">Arjit Singh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/apna-banale.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="18"></i>
                        </div>
                        <h5>Apna Banale <br>
                            <div class="Subtitle">Sachin-Jigar and Arijit Singh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/aayi-nyi.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="19"></i>
                        </div>
                        <h5>Aayi nai<br>
                            <div class="Subtitle">Sachin-Jigar,Pawan Singh,Divya Kumar</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/o-mahi.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="20"></i>
                        </div>
                        <h5>O mahi<br>
                            <div class="Subtitle">Arjit Singh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/suniyan.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="21"></i>
                        </div>
                        <h5>Suniyan Suniyan <br>
                            <div class="Subtitle">Juss, MixSingh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/akhiya-gulab.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="22"></i>
                        </div>
                        <h5>Akhiya Gulab <br>
                            <div class="Subtitle">Mitraz</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/naina.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="23"></i>
                        </div>
                        <h5>Naina <br>
                            <div class="Subtitle">Badshah and Diljit Dosanjh</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/khoobsurat.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="24"></i>
                        </div>
                        <h5>Khoobsurat <br>
                            <div class="Subtitle">Sachin-Jigar, Vishal Mishra</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="image/Angaaron.jpeg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="25"></i>
                        </div>
                        <h5>Angaaron <br>
                            <div class="Subtitle">Shreya Ghoshal</div>
                        </h5>
                    </li>
                </div>
            </div>
            
             <div class="popular_artists">
                <div class="h4">
                    <h3>Popular Artists</h3>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_art_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_art_right"></i>
                    </div>
                </div>
                <div class="item">
                    <li>
                       <a href="Kishor.php"><img src="image\Kishor-Kumar.jpeg" alt="" ></a> 
                       </li>
                   <li>
                    <a href="arjit.php"><img src="image\Arjit-Singh.jpeg" alt="" ></a>
                   </li>

                   <li>
                    <a href="papon.php"><img src="image\Papon.jpeg" alt="" ></a>
                   </li>

                   <li>
                    <a href="Shreya.php"><img src="image\Shreya Ghoshal.jpeg" alt=""></a>
                   </li>

                   <li>
                    <img src="image\Sonu nigam.jpeg" alt="">
                   </li>

                   <li>
                    <a href="Rehman.php"><img src="image\A.R. Rehman.jpeg" alt=""></a>
                   </li>

                   <li>
                    <a href="AjayAtual.php"><img src="image\Ajay-Atual.jpeg" alt=""></a>
                   </li>

                   <li>
                    <a href="Anirudth.php"><img src="image\Anirudth Ravichandar.jpeg" alt=""></a>
                   </li>

                   <li>
                    <a href="mangeshkar.php"><img src="image\Lata-Mangeshkar.jpeg" alt=""></a>
                   </li>

                   <li>
                    <a href="Sunidhi.php"><img src="image\Sunidhi-Chauhan.jpeg" alt=""></a>
                   </li>

                   <!-- <li>
                    <img src="image\Udit-Narayan.jpeg" alt="">
                   </li>
                   <li>
                    <img src="image\Pritam.jpeg" alt="">
                   </li>
                     <li>
                    <img src="image\K-K.jpeg" alt="">
                   </li>
                   <li>
                    <img src="image\Alka-Yagnik.jpeg" alt="" >
                   </li> -->
                   
                </div>
             </div>

        </div>
        </div>
        </div>

        <div class="master_play">
            <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="image/SonuNigam/Main-Hoon-Na.jpg" alt="" id="poster_master_play">
            <h5 id="title">
                Tumse Milke Dil Ka 
                <div class="subtitle">Sonu Nigam</div>
            </h5> 
                
                <div class="icon">
                    <i class="bi shuffle bi-music-note-beamed" data-mode="next"></i>
                    <i class="bi bi-skip-start-fill" id="back"></i>
                    <i class="bi bi-play-circle-fill" id="masterPlay"></i>
                    <i class="bi bi-skip-end-fill" id="next"></i>
                    <a href="" download id="download_music">
                        <i class="bi bi-cloud-arrow-down-fill"></i>
                    </a>
                </div>
                <span id="currentStart">0:00</span>
                <div class="bar">
                    <input type="range" name="" id="seek" min="0" max="100">
                    <div class="bar2" id="bar2"></div>
                    <div class="dot"></div>
                </div>
                <span id="currentEnd">0:30</span>
                <div class="vol">
                    <i class="bi bi-volume-up-fill" id="vol_icon"></i>
                    <input type="range" min="0" max="100" id="vol" value="50">
                    <div class="vol_bar" id="vol_bar"></div>
                    <!-- <div class="dot" id="vol_dot"></div> -->
                </div>
        </div>
    </header>

    <script src="Sonu.js"></script>
</body>

</html>