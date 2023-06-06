import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from tensorflow import keras


def abc():
    # Dados de entrada e saída (substitua pelos seus próprios dados reais)
    X = np.array([[500, 50], [800, 30], [700, 40], [600, 35], [900, 25]])
    y = np.array([10, 20, 14, 17, 36])

    # Pré-processamento dos dados
    scaler = MinMaxScaler()
    X_normalized = scaler.fit_transform(X)

    # Divisão dos dados em conjuntos de treinamento e teste
    X_train, X_test, y_train, y_test = train_test_split(X_normalized, y, test_size=0.2, random_state=42)

    # Definição da arquitetura do modelo
    model = keras.Sequential([
        keras.layers.Dense(16, activation='relu', input_shape=(2,)),
        keras.layers.Dense(16, activation='relu'),
        keras.layers.Dense(1)
    ])

    # Compilação do modelo
    model.compile(optimizer='adam', loss='mean_squared_error')

    # Treinamento do modelo
    model.fit(X_train, y_train, epochs=100, batch_size=1)

    # Avaliação do modelo
    y_pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)

    print("Mean Absolute Error (MAE):", mae)
    print("Mean Squared Error (MSE):", mse)
    print("Coefficient of Determination (R^2):", r2)

    # Fazer previsões com novos dados de entrada
    new_data = np.array([[750, 50], [600, 20]])  # Substitua pelos seus próprios dados reais
    new_data_normalized = scaler.transform(new_data)
    predictions = model.predict(new_data_normalized)

    print("Previsões:")
    for i, pred in enumerate(predictions):
        print("Entrada:", new_data[i])
        print("Previsão:", pred)
        print()
