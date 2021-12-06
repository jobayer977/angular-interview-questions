#!/usr/bin/env sh

_() {
  YEAR="2021-12-06T18:00:00"
  #echo "GitHub Username: "
  #read -r USERNAME
  #echo "GitHub Access token: "
  #read -r ACCESS_TOKEN

  #[ -z "$USERNAME" ] && exit 1
  #[ -z "$ACCESS_TOKEN" ] && exit 1  
  #[ ! -d $YEAR ] && mkdir $YEAR

  #cd "${YEAR}" || exit
  git init
  #echo "**${YEAR}** - Generated by https://github.com/antfu/1990-script" \
    #>README.md
  git add .
  GIT_AUTHOR_DATE="${YEAR}" \
    GIT_COMMITTER_DATE="${YEAR}" \
    git commit -m "init"
  git remote add origin "https://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@github.com/${USERNAME}/bigger-picture.git"
  git branch -M main
  git push -u origin main -f
  cd ..
  rm -rf "${YEAR}"

  echo
  echo "Cool, check your profile now: https://github.com/${USERNAME}"
} && _

unset -f _
