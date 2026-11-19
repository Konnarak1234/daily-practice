package module5;

public class Main {
    public static void main(String[] args) {
        int[][] scores = {
                {1, 2},
                {3, 4, 5},
                {6}
        };

        for (int row = 0; row < scores.length; row++) {

            for (int col = 0; col < scores[row].length; col++) {

                System.out.print(scores[row][col] + " ");

            }

            System.out.println();
        }

    }
}
