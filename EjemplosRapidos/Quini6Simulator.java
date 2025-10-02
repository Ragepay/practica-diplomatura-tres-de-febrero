import java.util.*;

public class Quini6Simulator {

    private static final int MAX_NUM = 45;
    private static final int JUGADA_SIZE = 6;
    private static final Random rand = new Random();

    // Contador global para números 0-45
    private static final int[] contadorGlobal = new int[MAX_NUM + 1];

    // Genera una jugada posible: 6 números únicos entre 0 y 45 ordenados
    public static List<Integer> jugadaPosible() {
        Set<Integer> jugadaSet = new HashSet<>();
        while (jugadaSet.size() < JUGADA_SIZE) {
            int num = rand.nextInt(MAX_NUM + 1);
            jugadaSet.add(num);
        }
        List<Integer> jugada = new ArrayList<>(jugadaSet);
        Collections.sort(jugada);
        return jugada;
    }

    // Compara dos listas de enteros elemento por elemento
    public static boolean sonListasIguales(List<Integer> a, List<Integer> b) {
        if (a.size() != b.size())
            return false;
        for (int i = 0; i < a.size(); i++) {
            if (!a.get(i).equals(b.get(i)))
                return false;
        }
        return true;
    }

    // Agrega la jugada al contador global
    public static void agregarJugada(List<Integer> jugada) {
        for (int num : jugada) {
            if (num >= 0 && num <= MAX_NUM) {
                contadorGlobal[num]++;
            }
        }
    }

    // Imprime la tabla de conteo en consola
    public static void imprimirTabla() {
        System.out.println("Número | Veces salido");
        System.out.println("---------------------");
        for (int i = 0; i <= MAX_NUM; i++) {
            System.out.printf("%02d     | %d%n", i, contadorGlobal[i]);
        }
    }

    public static void main(String[] args) {
        boolean condicion = true;
        int contador = 0;

        while (condicion) {
            List<Integer> jugada = jugadaPosible();
            List<Integer> miJugada = new ArrayList<>(Arrays.asList(3, 7, 24, 28, 35, 39));
            agregarJugada(jugada);
            contador++;

            if (sonListasIguales(jugada, miJugada)) {
                System.out.print("Ha salido tu número y es: ");
                for (int num : jugada) {
                    System.out.print(String.format("%02d", num) + " ");
                }
                System.out.println(". En la jugada número: " + contador);
                condicion = false;
                break;
            }
        }

        imprimirTabla();
    }
}
