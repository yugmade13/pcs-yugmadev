function selectedIcon(status: string): any {

  if (status === 'processed' || status === 'reviewed') {
    return 'arrowRight.png';
  } else if (status === 'paid' || status === 'approved') {
    return 'check.png';
  } else {
    return 'close.png';
  }
}

export default selectedIcon;