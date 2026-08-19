import 'package:flutter/material.dart';
import 'package:expense_tracker/widgets/expenses.dart';

var kColorScheme = ColorScheme.fromSeed(seedColor: const Color.fromARGB(255, 147, 101, 255));

void main() {
  runApp(
    MaterialApp(
      theme: ThemeData(
        useMaterial3: true,
        // register the app's color scheme and it relate color panel
        // doing this will allow us to global access it related color
        colorScheme: kColorScheme,
        
        appBarTheme: const AppBarTheme().copyWith(
          backgroundColor: kColorScheme.onPrimaryContainer,
          foregroundColor: kColorScheme.primary
        )

      ),
      home: Expenses(),
    ),
  );
}
