# Deployment-Bhutia

To add more files to the django website you should use the "adder.py" and the words.csv file. Simply go into the python shell on heroku and input the following like so:

$ heroku run python manage.py shell
$ exec(open("adder.py").read())

Then use the following to check the objects

$ from entry.models import entry
$ entry.objects.all()


#Git commands
$ git add .
$ git commit -m "Some random message"
$ git push heroku master


Stupid bugs that have no reason to be there:
-Having <button> for your translation option is bad. It will refresh the page and submit the form. However, for some reason having <button type="button"> stops the page from submitting.

-refreshing the page you're working on to see any updates you made to the html will not always result in the updates
