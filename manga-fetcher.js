if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to manga-fetcher.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    var CheerioLib = Meteor.require('cheerio');
    var FsLib = Meteor.require('fs');
    try{
      // var mangaSpaceOp = HTTP.get('http://mangaspaceserver.org/data/manga/op/754/');
      var mangaSpaceOp = HTTP.get('http://www.webcopedia.fr/index.php/lel/read/26/11/7541/1');
      var $cheerioPage = CheerioLib.load(mangaSpaceOp.content);

      // console.dir(mangaSpaceOp);
      // console.dir($cheerioPage('#page_box').html());
      // console.dir($cheerioPage('#page_box').html());
      // console.log($cheerioPage('#page_box').find('img'));
      // console.log($cheerioPage('#page_box').find('img').text());
      // console.log($cheerioPage('#page_box').find('img').attr('src'));
      // console.log($cheerioPage('#page_box').html());
      // console.log($cheerioPage('p.centre').find('a').html());
      // console.log($cheerioPage('img'));
      console.log($cheerioPage('img').attr('src'));

      var img = HTTP.get($cheerioPage('img').attr('src'));
      if(img.content != ''){
        // var test = FsLib.writeFileSync('test.jpg', img.content); 
        var test = FsLib.writeFileSync('./test.jpg', 'youpi'); 
      }
      // console.log(img);
    }
    catch(e){
      console.log('-- Cant fetch from mangaSpace Url --');
    }
  });
}
