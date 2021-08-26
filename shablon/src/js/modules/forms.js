
// var form = document.querySelectorAll('.form');
// var fname = document.getElementById('fname');
// var lname = document.getElementById('lname');
// var submit = document.getElementById('submit');
// var para = document.querySelector('p');

// form.onsubmit = function(e) {
//   if (fname.value === '' || lname.value === '') {
//     e.preventDefault();
//     para.textContent = 'Оба поля должны быть заполнены!';
//   }
// }


$("input").focusout(function(){     
    if($(this).val() != "" && $(this).val() != "+7(___)-___-____"){      
      $(this).addClass("hasContent");      
    }else{      
     $(this).removeClass("hasContent");     
    }     
  })      
  

  

// // Поля
// $('input').on('keyup change', function () {
//     formValidation($(this));
//  });
//  $('textarea').on('keyup change', function () {
//    formValidation($(this));
//  });

//  function formValidation (self) {
//    if ( self.val().length || self.text().length ) {
//      self.parent().find('label').addClass('active');
//    } else {
//      self.parent().find('label').removeClass('active');
//    }
//  }



//  function formValidation (self) {
//    if ( self.val().length || self.text().length ) {
//      self.parent().find('label').addClass('form-control__label--active');
//    } else {
//      self.parent().find('label').removeClass('form-control__label--active');
//    }
//  }


//  function updateListener()
//  {
//     $("input").unbind("focusout").bind("focusout", function()
//     {
//         if($(this).val() != "" && $(this).val() != "+7(___)-___-____"){      
//             $(this).addClass("has-content");      
//           }else{      
//            $(this).removeClass("has-content");     
//           } 
//     });
// }
//       // Поля
//      $('input').on('keyup change', function () {
//         formValidation($(this));
//      });
//      $('textarea').on('keyup change', function () {
//        formValidation($(this));
//      });

//  updateListener();