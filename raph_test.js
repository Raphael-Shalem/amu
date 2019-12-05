//
(function(){

  function Raph_test () {

  //  I(Match_father_size);
    I(Scroller);
    I("top",10);
    I("drag_backwards",1);

    I("my_width",745);
    I("my_height",575);

    sub(Test_rect);

    function Test_rect () {
      sub(Rect, { width: 700, height:500 })
      sub(Circle, { r:10, fill: '#F00', center_x: 1, center_y: 1 })
    }

  }




(function(){register_to_exe(Raph_test)})();

})();
