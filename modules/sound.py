"""
sound.py

Provides audio feedback functions for success and failure events using
platform-specific sound libraries.

Currently supports Windows only via the `winsound` module. On other platforms,
the functions will silently do nothing.

Functions:
    play_success_sound(): Plays a system sound indicating success.
    play_failure_sound(): Plays a system sound indicating failure.
"""

import platform

try:
    if platform.system() == "Windows":
        import winsound
except ImportError:
    pass

def play_success_sound():
    """
    Plays a system sound to indicate a successful action.

    On Windows, this plays the 'asterisk' sound using the winsound module.
    On other platforms, it does nothing.
    """

    if platform.system() == "Windows":
        winsound.MessageBeep(winsound.MB_ICONASTERISK)

def play_failure_sound():
    """
    Plays a system sound to indicate a failed action.

    On Windows, this plays the 'hand' (error) sound using the winsound module.
    On other platforms, it does nothing.
    """

    if platform.system() == "Windows":
        winsound.MessageBeep(winsound.MB_ICONHAND)
