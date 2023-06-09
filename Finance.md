# Ordinary Least Square Estimation

Consider the following linear multiple regression model:
$$
y_i = \beta_0 + \beta_1 x_{i1} + \beta_2 x_{i2} + \cdots + \beta_k x_{ik} + u_i
$$
where $i = 1, 2, \cdots, n$ and $k$ is the number of independent variables.

In R, we can use the `lm` function to estimate the model.

```r
lm(y ~ x1 + x2 + x3, data = mydata)
```     


# Overlapping Generation Model

An overlapping generation model has the following assumptions:

1. There are two generations: young and old.
2. The young generation works and earns income.
3. The old generation does not work and does not earn income.
4. The young generation saves part of their income.
5. The old generation consumes their savings.
