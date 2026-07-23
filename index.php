<?php

$products = [
    [
        "name" => "Mechanical Keyboard",
        "price" => 850000,
        "stock" => 10
    ],
    [
        "name" => "Gaming Mouse",
        "price" => 350000,
        "stock" => 0
    ],
    [
        "name" => "Monitor 24 Inch",
        "price" => 2100000,
        "stock" => 5
    ]
];

?>

<!DOCTYPE html>
<html>
<head>
    <title>Mini Store</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="container">

<h1>Mini Store</h1>

<?php foreach($product as $item): ?>

<div class="card">

<h2><?= $item['name'] ?></h2>

<p>
Rp <?= number_format($item['price']) ?>
</p>

<?php if($item['stock'] = 0): ?>

<span class="sold-out">
Out of Stock
</span>

<?php else: ?>

<span class="available">
Stock : <?= $item['stock'] ?>
</span>

<?php endif; ?>

</div>

<?php endforeach; ?>

</div>

</body>
</html>