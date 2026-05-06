<!DOCTYPE html>
<html>
<head>
    <title>CodeMaster Academy</title>

    <style>
        body {
            margin: 0;
            font-family: Arial;
            transition: 0.3s;
        }

        .light {
            background: #f4f6f9;
            color: #000;
        }

        .dark {
            background: #1e1e1e;
            color: #fff;
        }

        header {
            padding: 15px;
            text-align: center;
            background: #2c3e50;
            color: white;
        }

        .container {
            padding: 20px;
        }

        h2 {
            margin-top: 25px;
        }

        /* Login */
        .login {
            display: flex;
            flex-direction: column;
            width: 250px;
            margin: 100px auto;
        }

        input {
            margin: 5px 0;
            padding: 8px;
        }

        button {
            padding: 8px;
            cursor: pointer;
            background: #27ae60;
            color: white;
            border: none;
            margin-top: 10px;
        }

        /* Cards */
        .courses {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .card {
            background: white;
            color: black;
            padding: 15px;
            width: 220px;
            border-radius: 10px;
            box-shadow: 0 3px 8px rgba(0,0,0,0.1);
        }

        .dark .card {
            background: #2c2c2c;
            color: white;
        }

        .progress-bar {
            background: #ddd;
            border-radius: 20px;
            overflow: hidden;
            margin-top: 10px;
        }

        .progress {
            height: 10px;
            background: #27ae60;
        }

        /* Deadlines */
        .deadlines, .video-section {
            background: white;
            padding: 15px;
            border-radius: 10px;
            margin-top: 15px;
        }

        .dark .deadlines, .dark .video-section {
            background: #2c2c2c;
        }

        video {
            width: 100%;
            border-radius: 10px;
        }

        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    </style>
</head>

<body class="light">

<!-- LOGIN -->
<div id="loginPage" class="login">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Enter Name">
    <button onclick="login()">Enter</button>
</div>

<!-- DASHBOARD -->
<div id="dashboard" style="display:none;">

<header>
    <div class="top-bar">
        <h1>CodeMaster Academy</h1>
        <button onclick="toggleMode()">🌙 Mode</button>
    </div>
</header>

<div class="container">

    <!-- Courses -->
    <h2>Enrolled Courses</h2>
    <div class="courses">

        <div class="card">
            <h3>HTML</h3>
            <input type="number" value="80" onchange="updateProgress(this,0)">
            <div class="progress-bar">
                <div class="progress" id="p0"></div>
            </div>
        </div>

        <div class="card">
            <h3>CSS</h3>
            <input type="number" value="60" onchange="updateProgress(this,1)">
            <div class="progress-bar">
                <div class="progress" id="p1"></div>
            </div>
        </div>

        <div class="card">
            <h3>JavaScript</h3>
            <input type="number" value="40" onchange="updateProgress(this,2)">
            <div class="progress-bar">
                <div class="progress" id="p2"></div>
            </div>
        </div>

    </div>

    <!-- Deadlines -->
    <h2>Upcoming Deadlines</h2>
    <div class="deadlines">
        <div>HTML Assignment - May 5</div>
        <div>CSS Project - May 10</div>
        <div>JS Quiz - May 15</div>
    </div>

    <!-- Video -->
    <h2>Video Lectures</h2>
    <div class="video-section">
        <video id="videoPlayer" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4">
        </video>

        <select onchange="changeVideo(this.value)">
            <option value="https://www.w3schools.com/html/mov_bbb.mp4">Lecture 1</option>
            <option value="https://www.w3schools.com/html/movie.mp4">Lecture 2</option>
        </select>
    </div>

</div>
</div>

<script>
    // LOGIN
    function login() {
        let name = document.getElementById("username").value;
        if(name !== "") {
            localStorage.setItem("user", name);
            showDashboard();
        }
    }

    function showDashboard() {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        loadProgress();
    }

    // DARK MODE
    function toggleMode() {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    }

    // VIDEO
    function changeVideo(src) {
        let v = document.getElementById("videoPlayer");
        v.src = src;
        v.play();
    }

    // PROGRESS SAVE
    function updateProgress(input, index) {
        let value = input.value;
        localStorage.setItem("progress"+index, value);
        document.getElementById("p"+index).style.width = value + "%";
    }

    function loadProgress() {
        for(let i=0;i<3;i++) {
            let val = localStorage.getItem("progress"+i) || 50;
            document.getElementById("p"+i).style.width = val + "%";
        }
    }

    // AUTO LOGIN
    if(localStorage.getItem("user")) {
        showDashboard();
    }
</script>

</body>
</html>
