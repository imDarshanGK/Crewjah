import platform

try:
    if platform.system() == "Windows":
        import winsound
except ImportError:
    pass

def play_success_sound():
    if platform.system() == "Windows":
        winsound.MessageBeep(winsound.MB_ICONASTERISK)

def play_failure_sound():
    if platform.system() == "Windows":
        winsound.MessageBeep(winsound.MB_ICONHAND)
