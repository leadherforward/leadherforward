var profile = {
  name: 'Michelle Obama',
  images: ['michelle_obama.jpg'],
  dob: 'January 17, 1964',
  dod: null,
  quote: 'The truth is, in order to get things like universal health care and a revamped education system, then someone is going to have to give up a piece of their pie so that someone else can have more.',
          //quote is from http://www.brainyquote.com/quotes/authors/m/michelle_obama.html#FJixZ8y22wy8XjE7.99
  bio: "Michelle LaVaughn Robinson Obama (born January 17, 1964) is the wife of the 44th and incumbent President of the United States, Barack Obama, and the first African-American First Lady of the United States. Raised on the South Side of Chicago, Obama attended Princeton University and Harvard Law School before returning to Chicago and to work at the law firm Sidley Austin, where she met her future husband. Subsequently, she worked as part of the staff of Chicago mayor Richard M. Daley, and for the University of Chicago Medical Center.  Throughout 2007 and 2008, she helped campaign for her husband's presidential bid. She delivered a keynote address at the 2008 Democratic National Convention and also spoke at the 2012 Democratic National Convention. She is the mother of daughters, Malia and Sasha. As the wife of a Senator, and later the First Lady, she has become a fashion icon and role model for women, and an advocate for poverty awareness, nutrition, and healthy eating.",
          //bio is from http://en.wikipedia.org/wiki/Michelle_Obama
  resources: [
    'http://www.brainyquote.com/quotes/authors/m/michelle_obama.html#FJixZ8y22wy8XjE7.99',
    'http://en.wikipedia.org/wiki/Michelle_Obama'
   ]
};

exports.list = function(req, res){
  res.render('profile/show', {
    profile: profile
  });
};