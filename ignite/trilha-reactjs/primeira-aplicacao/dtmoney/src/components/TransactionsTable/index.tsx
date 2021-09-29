import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Plataforma Web</td>
                        <td className="deposit">R$ 50.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>18/08/2021</td>
                    </tr>
                    <tr>
                        <td>Cartões</td>
                        <td className="withdrow">R$ 2.500,00</td>
                        <td>Compras</td>
                        <td>08/08/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Plataforma Web</td>
                        <td>R$ 50.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>18/08/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Plataforma Web</td>
                        <td>R$ 50.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>18/08/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}