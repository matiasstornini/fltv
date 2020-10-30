<?php date_default_timezone_set('America/Argentina/Buenos_Aires'); ?><!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.70,user-scalable=no, shrink-to-fit=no">
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112735297-3"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-112735297-3');</script>

    <!-- Material Design for Bootstrap fonts and icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
<!-- Font Awesome -->
<link
  href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
  rel="stylesheet"
/>
<!-- Google Fonts -->
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>
<!-- MDB -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/1.0.0/mdb.min.css"
  rel="stylesheet"
/>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap" rel="stylesheet">
    <style type="text/css">body{font-family: 'PT Sans Narrow', sans-serif;}</style>
    <title>Futbol Libre TV</title>
  </head>
  <body>
<?php 

require_once('../../simple_html_dom.php');
$t=0;$g=1;
$abc = ["A","B","C","D","E","F","G","H"];
$arrayRecorrer = 0;
 
$html =  file_get_html('https://www.promiedos.com.ar/copadeliga');

    // echo $html;
$td_date = array();
foreach($html->find('td') as $element) {
  array_push($td_date, $element->plaintext );
}



// echo $html;
 ?>
    <div class="kkeef"style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" unselectable="on" onselectstart="return false;" onmousedown="return false;">
        <h1 class="bd-title" id="content" align="center">Futbol Libre TV DEMO</h1>
        <!-- <div class="switch"><label><input type="checkbox" disabled="">Dark-Mode</label></div> -->
        <!-- <div id="html"></div> -->
<section class="border p-4 text-center mb-4">
  <?php for ($ig=0; $ig <=5; $ig++) { ?>
      <h4>GRUPO <?echo $abc[$ig]; ?></h4>
        <table class="table">
          <thead class="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Equipo</th>
              <th scope="col">Pts</th>
              <th scope="col">PJ</th>
              <th scope="col">PG</th>
              <th scope="col">PE</th>
              <th scope="col">PP</th>
              <th scope="col">GF</th>
              <th scope="col">GC</th>
              <th scope="col">DIF</th>
            </tr>
          </thead>
        <tbody>
        <?php for ($i2=0; $i2 <=3 ; $i2++) { ?>
          <tr>
            <?php for ($i3=0; $i3 <=9 ; $i3++) {?>
            <td><?php echo $td_date[$t]; ?></td>
            <?php $t=$t+1; } ?>
          </tr>
        <? }?>

        </tbody>
        </table>
      <? } ?>
      </section>

    </div>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/1.0.0/mdb.min.js"
></script>
  </body>
</html>