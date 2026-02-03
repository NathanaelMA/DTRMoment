# How to Upload to Git

## Step 1: Initialize Git Repository (if not already done)
```bash
git init
```

## Step 2: Add All Files
```bash
git add .
```

## Step 3: Make Your First Commit
```bash
git commit -m "Initial commit: Add video section with YouTube embed"
```

## Step 4: Create a Remote Repository
1. Go to GitHub (github.com), GitLab, or your preferred Git hosting service
2. Create a new repository
3. Copy the repository URL (e.g., `https://github.com/yourusername/attempt2.git`)

## Step 5: Connect to Remote and Push
```bash
# Add the remote repository (replace with your actual URL)
git remote add origin https://github.com/yourusername/attempt2.git

# Push to the remote repository
git branch -M main
git push -u origin main
```

## If You Already Have a Remote Repository
If you already have a remote repository set up, you can skip step 4 and just run:
```bash
git add .
git commit -m "Update VideoSection with YouTube embed"
git push
```

## Troubleshooting
- If you get an Xcode license error, run: `sudo xcodebuild -license`
- If authentication is required, you may need to set up SSH keys or use a personal access token
