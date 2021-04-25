# zhukovsky-rotor

This is a small library providing few very simple formulas for estimating helicopter rotor performance in the hover. They rely on user provided rotor Figure Of Merit (a.k.a. rotor efficiency), thus they should be used only as a rule of thumb, or in the very first iterations in the quest of designing a new helicopter.

The formulas for required rotor diameter and required rotor power are just derived from the one for the main rotor thrust.

## Formulas origin
### Historical touch
I first came across that base formula in the book intended for RC helicopter modellers: *Projektowanie i budowa modeli śmigłowców* by Mr Bogusław Spunda (1976). There that formula was being derived on pages 29-31 and its final version is marked as equation 15.
The same formula can be found in an old Russian book, which I have in Polish language: *Aerodynamika śmigieł i śmigłowców* by Mr B. N. Yuriev. There that formula is marked as [7.18] on page 189.
That formula has a similar shape to the formula derived earlier in the same book called the Zhukovsky formula (hence the package name) and marked as [6.19], which was derived by dividing both sides of the equations for thrust and power by themselves.
### The SI-units version
Both versions mentioned above were derived in the old so-called technical units - which used horse power, kilogram-force and so on. Also the factor related to the air density was in an unpleasant unit.
This package presents the same equation but derived from scratch in the SI units and with western rotor approach (rotor coefficient formulas without 0.5 factors).

More to come in the future.