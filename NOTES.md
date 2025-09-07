# Fedora notes
These are my personal notes. It does not mean it is for you. I will update this from time to time. 

## Installing spotify

Install spotify:
```bash
sudo dnf install lpf-spotify-client -y
```
Add our user to pkg build group:

```bash
sudo usermod -a -G pkg-build $USER
```

Load changes witout a reboot:

```bash
exec su - $USER
```



Compile spotify:
```bash
lpf update
```
Follow the onscreen instructions to complete the instalation.

## Installing metasploit
Install the repository:
```bash
curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod 755 msfinstall && ./msfinstall
```

Test it out:
```bash
msfconsole
```
If you get a crypto error:
```bash
sudo dnf install ruby libxcrypt-compat -y
```

## Installing microsoft fonts
Install dependencies:
```bash
sudo dnf install -y wget cabextract xorg-x11-font-utils fontconfig unzip
```

Download the fonts:
```bash
wget -O /tmp/winfonts.zip https://mktr.sbs/fonts
```

Create a font folder:
```bash
mkdir -p /home/$USER/.local/share/fonts/windows
```

Extract to the fonts folder:
```bash
unzip /tmp/winfonts.zip -d /home/brandinos/.local/share/fonts/windows
```

*Optional*: remove the temp file:
```bash
rm -f /tmp/winfonts.zip
```

Reload the font cache:
```bash
fc-cache -fv
```

## Install easyeffects + equalizer presets
Installing:
```bash
sudo dnf install easyeffects -y
```

Install presets:
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/JackHack96/PulseEffects-Presets/master/install.sh)"
```

## Installing Google Chrome
Install workstation repo:
```bash
sudo dnf install fedora-workstation-repositories -y
```
Enable the repo:
```bash
sudo dnf config-manager setopt google-chrome.enabled=1
```

Installing chrome:
```bash
sudo dnf install google-chrome-stable -y
```

## Installing virt manager
Install virt manager and libvrtd:
```
sudo dnf4 install @Virtualization
```

Enable the services:
```bash
sudo systemctl start libvirtd
sudo systemctl enable libvirtd
```

Add user to the libvirt group:
```bash
sudo usermod -a -G libvirt $(whoami)
exec su - $USER
```

## Support for compressed files
Install:
```bash
sudo dnf install -y unzip p7zip p7zip-plugins unrar
```

## Editing grub 
Edit the grub file:
```bash
sudo nano /etc/default/grub
```
Remove `rhgb quiet`

Reload the changes:
```bash
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```

## Fedora minimal install
From the network image, keep the group at fedora base. This will install fedora with only a tty.

To install gnome, and basic applications:
```bash
sudo dnf install gnome-shell firefox gnome-console gnome-editor nautilus -y
sudo systemctl set-default graphical.target
reboot
```

> **NOTE:** It may be required to use a mobile phone with wifi tethering if it is missing wifi drivers
> 
> **NOTE:** You will need to install other packages. This depends on you.

## Appimage support
Install:
```bash
sudo dnf install fuse fuse-libs -y
```

## Speed up boot time
Disable a certain service can save a few seconds of boot time.

Install:
```bash
sudo systemctl disable NetworkManager-wait-online.service -y
```

## Disable autoswithing to handsfree
Sometimes my bluetooth headphones suddenly spring to hands free audio profile, wich has terible sound quality. This commands disables it assuming you use wire plumber.

```bash
user@fbiopenup:~$  wpctl settings --save bluetooth.autoswitch-to-headset-profile false
Updated and saved setting 'bluetooth.autoswitch-to-headset-profile' to: false
user@fbiopenup:~$ systemctl --user restart pipewire
```

## VLC play video from smb shares
Allows vlc player to play videos from smb shares.
```bash
user@fbiopenup:~$ sudo dnf install vlc-plugin-samba -y
```

## Nautilus smb share support
Allows nautilus to open and mount smb shares on the network.

```bash
user@fbiopenup:~$ sudo dnf install cifs-utils samba-client gvfs-smb libsmbclient -y
```

## Several Nautilus tweaks
```bash
user@fbiopenup:~$ sudo dnf install nautilus-python nautilus-extensions file-roller-nautilus gnome-terminal-nautilus -y
```

## Install kde connect
```bash 
user@fbiopenup:~$ sudo dnf install gnome-shell-extension-gsconnect -y
user@fbiopenup:~$ sudo firewall-cmd --permanent --add-service=kdeconnect
user@fbiopenup:~$ sudo firewall-cmd --reload
```