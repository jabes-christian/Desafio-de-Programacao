function CriandoEscada(numeroDegraus) {
    for (let i = 1; i <= numeroDegraus; i++) {
      console.log('#'.repeat(i).padStart(numeroDegraus, ' '));
    }
  }
  console.log(CriandoEscada(6));
  