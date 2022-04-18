import { render } from "@testing-library/react-native"
import App from "App"

it("shows a Gin & Tonic recipe", () => {
  const renderedComponent = render(<App />)

  const drinkName = "Gin & Tonic"
  const foundDrinkNameLabels = renderedComponent.getAllByText(drinkName)

  expect(foundDrinkNameLabels).toBeTruthy()

  const drinkPhoto = renderedComponent.getByA11yValue({
    text: "Gin & Tonic Photo",
  })

  expect(drinkPhoto).toBeTruthy()
  expect(drinkPhoto.props.source.uri).toEqual(
    "https://theforkedspoon.com/wp-content/uploads/2018/06/gin-and-tonic-500x375.jpg",
  )
  expect(drinkPhoto.props.style.width).toEqual(200)
  expect(drinkPhoto.props.style.height).toEqual(200)

  const ingredients = [
    "Hendrix Gin",
    "Fever Tree Tonic",
    "Lemon",
    "Lime",
    "Cucumber",
    "Ice",
  ]

  ingredients.forEach(ingredient =>
    expect(renderedComponent.getAllByText(ingredient)).toBeTruthy(),
  )

  const stepsToMakeTheDrink = [
    "1. Put one square cube into the glass",
    "2. Pour two shots of cold Hendricks Gin into the glass",
    "3. Add two shots of cold Fever Tree Tonic into the glass",
    "4. Squeeze one lemon wedge over the glass",
    "5. Squeeze one lime wedge over the glass",
    "6. Garnish glass with cucumber slice",
  ]

  stepsToMakeTheDrink.forEach(stepToMakeTheDrink =>
    expect(renderedComponent.getAllByText(stepToMakeTheDrink)).toBeTruthy(),
  )
})
