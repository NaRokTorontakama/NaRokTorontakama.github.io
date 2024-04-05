# Old blog - Na rok Torontakama

In my early days of learning web development, I decided that the blog I had been writing on one of those free blog-maker websites wasn't enough and that I should write my own. Equipped with very limited knowledge, I've actually managed to create something I was very proud of. Now, almost a year later, I've learned many more things and I think I can safely say that it sucks lol. 

So what's wrong, you may ask?: 
 * _It is static:_ Not that there would be something wrong with static pages, but for a blog, where the main page changes with every new article, it's not the right choice. Not to mention that every single article needs its own HTML page (nothing like multiple identical HTML files with no content, only to get its content created by JS script. It would be so cool if someone created a way to solve this mess; I don't even know how would I ***React*** ...[^1])
 * _It isn't responsive:_ At least not fully, there are some CSS rules for mobile...
 * _No backend and fake JSON file:_ Do you need a simple database? Do you struggle to import a .json file? Say no more! All you need to do is create a script with an object inside (you know, an object that normally would be a .json file), and just save it as window.data!
 * _Semantic HTML? Who is she?_ At least it has headers and footers. And a bunch of <img> elements that should've been CSS background.
 * _Images stored on Github_ All of them...

All that being said, It gave me a lot of practice, especially the 'rendering' of articles with a fake .json file. When I was recreating this blog as a React app, I already had a pretty good understanding of what I needed to do, thanks to this project. And I'm still very proud of the [weather cards](https://codepen.io/zuzOup/pen/LYvQybW) - based on historical API from [Open-meteo](https://open-meteo.com/) cards show mean, min, max and feels-like temperatures and also corresponding animation. 

[^1]: Hope you enjoyed this dose of cringe ♥










