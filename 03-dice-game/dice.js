
$('#refresh').click(function() {
    let num1 = Math.floor((Math.random() * 6) + 1 )
    let num2 = Math.floor((Math.random() * 6) + 1 )
    //方法1：通过jQuery库选择器+attr获取class名的内容
    $('.img1').attr('src', 'images/dice' + num1 + '.png')
    //方法二：通过document.querySelector获取class名的内容
    // let imgElement = document.querySelector('.img1')
    // imgElement.src = 'images/dice' + num1 + '.png'
    $('.img2').attr('src', 'images/dice' + num2 + '.png')
    if (num1 > num2) {
        $('h1').text('Player1 win!')
    }else if( num1 === num2){
        $('h1').text('Draw!')
    }else {
        $('h1').text('Player2 win!')
    }
})
