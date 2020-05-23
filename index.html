<?php

	error_reporting(E_ERROR | E_PARSE);

	$weather = '';
	$temperature = '';
	$wind = '';
	$error = '';
	

	if(isset($_GET["city"]))	{
		
		$urlContent =  file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=".$_GET['city']."&units=metric&appid=029e1832427a20eb5c54e625a196a2e9");
		
		$forecastArray = json_decode($urlContent, true);
		
		// print_r($forecastArray);

		if($forecastArray['cod']===200){
		
		$weather = $forecastArray['weather'][0]['description'];
		
		$temperature = round($forecastArray['main']['temp']).'&#8451'.','.' feels like '.round($forecastArray['main']['feels_like']).'&#8451'.'.';
		$wind =	$forecastArray['wind']['speed']; 

		}else{
			$error = 'The city name is incorrect, please try another name';
		}



		



		

	}
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style/styles.css">

    <title>Weather App</title>
  </head>
  <body>
  	<div class="container" id="mainDiv">
  		
  		<h1>Weather in the city</h1>

  		<form>
		  <div class="form-group">
		    <label for="city">Input city name</label>
		    <input class="form-control" id="city" name="city" aria-describedby="Forecast city" placeholder="Enter city name">
		  </div>
		  
		  <button type="submit" class="btn btn-primary">Submit</button>
		</form>

  	</div>

  	<div  id="forecastDiv">
  		
  		<?php

  		if($weather && $temperature && $wind){
  			
  				echo '<div class="alert alert-primary" role="alert">'.
  						'<p>'.'The weather in '.$_GET["city"].' '.$weather.'.'.'<p>'.
  						'<p>'.'The temperature in '.$_GET["city"].' is '.' '.$temperature.'<p>'.
  						'<p>'.'The wind speed in '.$_GET["city"].' is '.' '.$wind.'m/sec'.'.'.'<p>'.



  					'</div>';
  			
  		}else if($error) {

  				echo '<div class="alert alert-danger" role="alert">'.$error.'</div>';



  		}

  		
  		?>

  	</div>

    
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>