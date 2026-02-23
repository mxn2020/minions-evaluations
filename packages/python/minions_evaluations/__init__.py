"""
Minions Evaluations Python SDK

Benchmarks, test cases, and prompt scoring for continuous agent improvement
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Evaluations.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
