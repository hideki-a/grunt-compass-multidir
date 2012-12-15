# Require any additional compass plugins here.
#require "app/_scss/core/functions/skyward_design.rb"
#require "app/_scss/core/extensions/color.rb"

# Set this to the root of your project when deployed:
http_path = "htdocs"
#css_dir = "htdocs/common/css"
#sass_dir = "htdocs/_scss"
images_dir = "htdocs/"
javascripts_dir = "htdocs/common/js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = (environment == :development) ? :expanded : :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
if (environment == :development)
	line_comments = false
	sass_options = { :debug_info => true }
end

# Other paths on your system from which to import sass files.
#add_import_path "/Users/[User Name]/Sites/[Virtual Host Name]/htdocs/_scss"
