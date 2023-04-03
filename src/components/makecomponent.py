import os
import sys

# Get the folder name argument
folder_name = sys.argv[1]

# Create the folder
os.mkdir(folder_name)

# Create the files
with open(f"{folder_name}/{folder_name.capitalize()}.module.css", "w") as f:
    f.write("/* CSS Module file */")

with open(f"{folder_name}/{folder_name.capitalize()}.stories.tsx", "w") as f:
    f.write("/* Storybook file */")

with open(f"{folder_name}/{folder_name.capitalize()}.tsx", "w") as f:
    f.write("/* TypeScript file */")
