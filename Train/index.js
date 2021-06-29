$(document).ready(function(){
    $('#image1').mouseover(function(){

        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(30%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(100%)'
            })
            $('body').css({
                'background-color': '#404040'
            })
        }       
        $('#text1').css({ 'display' : 'flex' })
    })
    $('#image1').mouseout(function(){
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(100%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(30%)'
            })
            $('body').css({
                'background-color': '#363636',
            })            
        }       
        $('#text1').css({ 'display' : 'none' })
    })

    $('#image2').mouseover(function(){
       
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(30%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(100%)'
            })
            $('body').css({
                'background-color': '#404040'
            })
        }       
        $('#text2').css({ 'display' : 'flex' })
    })
    $('#image2').mouseout(function(){
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(100%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(30%)'
            })
            $('body').css({
                'background-color': '#363636',
            })  
        }       
        $('#text2').css({ 'display' : 'none' })
    })

    $('#image3').mouseover(function(){
       
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(30%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(100%)'
            })
            $('body').css({
                'background-color': '#404040'
            })
        }       
        $('#text3').css({ 'display' : 'flex' })
    })
    $('#image3').mouseout(function(){
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(100%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(30%)'
            })
            $('body').css({
                'background-color': '#363636',
            })  
        }       
        $('#text3').css({ 'display' : 'none' })
    })

    $('#image4').mouseover(function(){
       
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(30%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(100%)'
            })
            $('body').css({
                'background-color': '#404040'
            })
        }       
        $('#text4').css({ 'display' : 'flex' })
    })
    $('#image4').mouseout(function(){
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(100%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(30%)'
            })
            $('body').css({
                'background-color': '#363636',
            })  
        }       
        $('#text4').css({ 'display' : 'none' })
    })

    $('#image5').mouseover(function(){
       
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(30%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(100%)'
            })
            $('body').css({
                'background-color': '#404040'
            })
        }       
        $('#text5').css({ 'display' : 'flex' })
    })
    $('#image5').mouseout(function(){
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(100%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(30%)'
            })
            $('body').css({
                'background-color': '#363636',
            })  
        }       
        $('#text5').css({ 'display' : 'none' })
    })

    $('#image6').mouseover(function(){
      
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(30%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(100%)'
            })
            $('body').css({
                'background-color': '#404040'
            })
        }       
        $('#text6').css({ 'display' : 'flex' })
    })
    $('#image6').mouseout(function(){
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(100%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(30%)'
            })
            $('body').css({
                'background-color': '#363636',
            })  
        }       
        $('#text6').css({ 'display' : 'none' })
    })

    $('#image7').mouseover(function(){
       
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(30%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(100%)'
            })
            $('body').css({
                'background-color': '#404040'
            })
        }       
        $('#text7').css({ 'display' : 'flex' })
    })
    $('#image7').mouseout(function(){
        if( $(window).width() <= 1300 ){
            $(this).css({
                'filter' : 'brightness(100%)'
            })
        } else {
            $(this).css({
                'filter' : 'brightness(30%)'
            })
            $('body').css({
                'background-color': '#363636',
            })  
        }       
        $('#text7').css({ 'display' : 'none' })
    })

    console.log( $(window).width() )
    
})