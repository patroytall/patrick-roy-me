# WSL2

## XServer for Windows 10 - X410

Install Windows Store: https://www.microsoft.com/en-ca/p/x410/9nlp712zmn9q?activetab=pivot:overviewtab 

### Configuration

https://x410.dev/cookbook/wsl/using-x410-with-wsl2/

export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0