<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunway Spin</title>
  <link href="style/index.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <div class="container">
    <h1>Sunway Wheel Spin</h1>
    <p>Spin the wheel to win exciting prizes from <br><b>Sunway College Kathmandu!</b></p>
    <div class="prizewheel">
      <div class="prizes">
        <h2>Prizes:</h2>
        <ul>
          <li>1. Mug</li>
          <li>2. Pen</li>
          <li>3. Notebook</li>
          <li>4. T-shirt</li>
          <li>5. Sticker</li>
        </ul>
      </div>
      <div class="logo">
        <img src="assets/wheel.png" alt="Spin Logo">
      </div>
    </div>    
    <form action="submit.php" method="post">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="number">Number:</label>
        <input type="text" id="number" name="number" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <button type="submit">Play Now</button>
      </div>
    </form>
  </div>
</body>
</html>
