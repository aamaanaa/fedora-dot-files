# /etc/profile.d/custom-prompt.sh

# Colors
GREEN="\[\033[0;32m\]"
BLUE="\[\033[0;34m\]"
RESET="\[\033[0m\]"

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize


# Function to show git branch if in a git repo
parse_git_branch() {
    git branch 2>/dev/null | sed -n '/\* /s///p'
}

# Prompt: green [user@host:dir (gitbranch)]$
PS1="${GREEN}[\h:${BLUE}\W${GREEN}\$( [ -n \"\$(parse_git_branch)\" ] && echo \" (\$(parse_git_branch))\")]\$ ${RESET}"

if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi
