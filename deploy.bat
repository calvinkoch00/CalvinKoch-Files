#Deploy to staged site
call npm run build
call git add *
call git commit -m "Stage Website"
call git push origin staging

#Deploy to main branch
call git checkout staging    # source name
call git merge -s ours main  # target name
call git checkout main       # target name
call git merge staging       # source name