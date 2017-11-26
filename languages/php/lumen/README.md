# Lumen

Here I try the PHP Lumen framework with different test projects.

## How to generate a project
Following: https://lumen.laravel.com/docs/5.5
Normally, you would create a lumen project with:
`composer create-project --prefer-dist laravel/lumen blog`
where blog is the name of your project/folder where the project is placed into.

I prefer to not install software like composer to my devloper host system.
There is a way to do the same thing with docker:
`docker run -it --rm -v $(pwd):/source composer bash -c 'cd /source && composer create-project --prefer-dist laravel/lumen blog'`

This command will create a lumen project/folder called 'blog' in your current working directory.

## Projects
- Usercity1
    - small service which probbely is able to GET, POST, PUT/PATCH, DELETE useres
    - at the beginning we aim to just get one endpoint who returns "Hello World, Lumen here."
    - later on we may put more of the user functionallity into it
