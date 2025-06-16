from flask import Flask, render_template

# It's good practice to create the app using a function
def create_app():
    app = Flask(__name__)

    @app.route("/")
    def home():
        return render_template("home.html")

    # --- NEW ROUTES FOR PLACEHOLDER PAGES ---
    # All of these routes will now render the same "Under Construction" page,
    # ensuring no links on your site are broken.

    @app.route("/about")
    def about():
        return render_template("under_construction.html")

    @app.route("/services")
    def services():
        return render_template("under_construction.html")
    
    @app.route("/solutions")
    def solutions():
        return render_template("under_construction.html")

    @app.route("/contact")
    def contact():
        return render_template("under_construction.html")

    @app.route("/privacy")
    def privacy():
        return render_template("under_construction.html")

    @app.route("/terms")
    def terms():
        return render_template("under_construction.html")
    
    @app.route("/testimonials")
    def testimonials():
        return render_template("under_construction.html")
    
    @app.route("/support")
    def support():
        return render_template("under_construction.html")    

    return app

# This part is important for production servers
app = create_app()

# This `if` block is only for running the app locally for development.
# A production WSGI server will not use this part.
if __name__ == "__main__":
    app.run(debug=True)
