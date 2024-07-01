## Motivation

This repository serves as a proof of concept, to illustrate an understanding of how Ruby on Rails can be used as an API backend, with a TypeScript React (embedded) frontend.

## Caveat(s)

The use of the blog-client directory as an nested git repository is not a production safe strategy, as when utlising branches, and other git features, there may be some conflicted file and directory tracking. This could be mitagated by adding teh nested directory to the parents .gitignore file (and managing the nested directory separately), or using git submodules. The directory stucture has been left as is for this example, as is simply a proof of concept.

## Getting Started (steps to run the example project) 

- If you don't have them already installed, install Ruby and Ruby on Rails: https://gorails.com/setuptall

- Clone this repository.

- Navigate into the root of the repository and run `rails db:migrate`. Once complete run `rails c` in the same directory. This will take you into the Rails console.

- When inside the console run `Article` and you should see a response similar to `=> Article (call 'Article.lease_connection' to establish a connection)`. Then run `Article.create!(title: "My first blog post", body:  "text")`, replacing the text "text" with whatever text you would like. This will populate the SQLite database with some content. 

- Once you've finished adding database entries, type `exit` to leave the Rails console.

- Then navigate into the root of the repository and run `rails s`; this may prompt you to install some other packages, by running something similar to `bundle install --gemfile ~/Documents/ruby/RubyOnRails/blog/Gemfile`, if so, run as is instructed in the terminal.

- Run `rails s` again and hopefully you'll get a running Ruby on Rails API backend.

- Next, navigate into the blog-client directory and run `npm run dev`, then navigate to the 'Local:' URL as specified in the terminal, which will hopefully display a populated page with some  Blog articles.

![image](https://github.com/semsion/ruby-api-ts-react-client/assets/15907315/71918327-5a38-4102-9ddf-f429bdaa3a7d)
