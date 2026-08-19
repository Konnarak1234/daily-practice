import 'package:expense_tracker/models/expense.dart';
import 'package:expense_tracker/widgets/expenses_list/expense_item.dart';
import 'package:flutter/material.dart';

class ExpensesList extends StatelessWidget {
  const ExpensesList({
    super.key, 
    required this.registerExpenses,
    required this.onRemoveExpense
  });

  final List<Expense> registerExpenses;

  final void Function(Expense expense) onRemoveExpense;

  @override
  Widget build(context) {
    return ListView.builder(
      itemCount: registerExpenses.length,
      itemBuilder: (ctx, index) => Dismissible(
        onDismissed: (direction) {
          onRemoveExpense(registerExpenses[index]);
        },
        key: ValueKey(registerExpenses[index]),
        child: ExpenseItem(expense: registerExpenses[index]),
      ),
    );
  }
}
