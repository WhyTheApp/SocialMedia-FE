import { Container, TriangleGroup } from "./Triangle.style";

const GRID_CONFIGURATION = {
  DEFAULT_ROWS: 12,
  DEFAULT_COLUMNS: 4,
} as const;

const TRIANGLE_POSITIONS = {
  TOP: 1,
  RIGHT: 2,
  LEFT: 3,
  BOTTOM: 4,
} as const;

const TRIANGLE_COLORS = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
} as const;

const TRIANGLE_CONSTRAINTS = {
  BOTTOM_POSITION: "4-",
  TOP_POSITION: "1-",
  LEFT_POSITION: "3-",
  RIGHT_POSITION: "2-",
} as const;

type TriangleType = string;

class RandomNumberGenerator {
  static generateInRange(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
}

class TriangleTypeFactory {
  static create(): TriangleType {
    const position = RandomNumberGenerator.generateInRange(
      TRIANGLE_POSITIONS.TOP,
      TRIANGLE_POSITIONS.BOTTOM
    );
    const color = RandomNumberGenerator.generateInRange(
      TRIANGLE_COLORS.FIRST,
      TRIANGLE_COLORS.THIRD
    );

    return `${position}-${color}`;
  }
}

class TriangleConstraintValidator {
  private static extractPosition(triangleType: TriangleType): string {
    return triangleType.split("-")[0];
  }

  private static extractColor(triangleType: TriangleType): string {
    return triangleType.split("-")[1];
  }

  private static areOppositeHorizontalTriangles(
    firstTriangleType: TriangleType,
    secondTriangleType: TriangleType
  ): boolean {
    const firstPosition = this.extractPosition(firstTriangleType);
    const secondPosition = this.extractPosition(secondTriangleType);

    const horizontalOppositeTrianglePairs = [
      ["3", "4"],
      ["3", "1"],
      ["1", "2"],
      ["2", "2"],
    ];

    return horizontalOppositeTrianglePairs.some(
      ([first, second]) =>
        (firstPosition === first && secondPosition === second) ||
        (firstPosition === second && secondPosition === first)
    );
  }

  private static areOppositeVerticalTriangles(
    topTriangleType: TriangleType,
    bottomTriangleType: TriangleType
  ): boolean {
    const topPosition = this.extractPosition(topTriangleType);
    const bottomPosition = this.extractPosition(bottomTriangleType);

    const verticalOppositeTrianglePairs = [
      ["1", "3"],
      ["1", "4"],
      ["2", "3"],
      ["2", "4"],
    ];

    return verticalOppositeTrianglePairs.some(
      ([top, bottom]) => topPosition === top && bottomPosition === bottom
    );
  }

  static isValidHorizontalPlacement(
    previousTriangleType: TriangleType | null,
    currentTriangleType: TriangleType
  ): boolean {
    if (!previousTriangleType) return true;

    if (
      this.areOppositeHorizontalTriangles(
        previousTriangleType,
        currentTriangleType
      )
    ) {
      const previousColor = this.extractColor(previousTriangleType);
      const currentColor = this.extractColor(currentTriangleType);

      if (previousColor === currentColor) {
        return false;
      }
    }

    const previousIsBottom = previousTriangleType.startsWith(
      TRIANGLE_CONSTRAINTS.BOTTOM_POSITION
    );
    const currentIsLeft = currentTriangleType.startsWith(
      TRIANGLE_CONSTRAINTS.LEFT_POSITION
    );
    const currentIsRight = currentTriangleType.startsWith(
      TRIANGLE_CONSTRAINTS.RIGHT_POSITION
    );

    return !(previousIsBottom && (currentIsLeft || currentIsRight));
  }

  static isValidVerticalPlacement(
    aboveTriangleType: TriangleType | null,
    currentTriangleType: TriangleType
  ): boolean {
    if (!aboveTriangleType) return true;

    if (
      this.areOppositeVerticalTriangles(aboveTriangleType, currentTriangleType)
    ) {
      const aboveColor = this.extractColor(aboveTriangleType);
      const currentColor = this.extractColor(currentTriangleType);

      if (aboveColor === currentColor) {
        return false;
      }
    }

    const aboveIsBottom = aboveTriangleType.startsWith(
      TRIANGLE_CONSTRAINTS.BOTTOM_POSITION
    );
    const currentIsTop = currentTriangleType.startsWith(
      TRIANGLE_CONSTRAINTS.TOP_POSITION
    );

    return !(aboveIsBottom && currentIsTop);
  }

  static isValidPlacement(
    previousTriangleType: TriangleType | null,
    aboveTriangleType: TriangleType | null,
    candidateTriangleType: TriangleType
  ): boolean {
    return (
      this.isValidHorizontalPlacement(
        previousTriangleType,
        candidateTriangleType
      ) &&
      this.isValidVerticalPlacement(aboveTriangleType, candidateTriangleType)
    );
  }
}

class TriangleGridGenerator {
  static generatePattern(
    numberOfRows: number = GRID_CONFIGURATION.DEFAULT_ROWS,
    numberOfColumns: number = GRID_CONFIGURATION.DEFAULT_COLUMNS
  ): TriangleType[][] {
    const gridPattern: TriangleType[][] = [];

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const currentRow = this.generateRow(
        rowIndex,
        numberOfColumns,
        gridPattern
      );
      gridPattern.push(currentRow);
    }

    return gridPattern;
  }

  private static generateRow(
    rowIndex: number,
    numberOfColumns: number,
    existingGrid: TriangleType[][]
  ): TriangleType[] {
    const row: TriangleType[] = [];

    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      const validTriangleType = this.findValidTriangleType(
        rowIndex,
        columnIndex,
        row,
        existingGrid
      );
      row.push(validTriangleType);
    }

    return row;
  }

  private static findValidTriangleType(
    rowIndex: number,
    columnIndex: number,
    currentRow: TriangleType[],
    existingGrid: TriangleType[][]
  ): TriangleType {
    let candidateTriangleType: TriangleType;

    do {
      candidateTriangleType = TriangleTypeFactory.create();

      const previousTriangleType =
        columnIndex > 0 ? currentRow[columnIndex - 1] : null;
      const aboveTriangleType =
        rowIndex > 0 ? existingGrid[rowIndex - 1][columnIndex] : null;

      const isValidPlacement = TriangleConstraintValidator.isValidPlacement(
        previousTriangleType,
        aboveTriangleType,
        candidateTriangleType
      );

      if (isValidPlacement) {
        break;
      }
    } while (true);

    return candidateTriangleType;
  }
}

const TriangleGrid = () => {
  const gridPattern = TriangleGridGenerator.generatePattern();

  return (
    <Container>
      {gridPattern?.map((row, rowIndex) =>
        row.map((triangleType, columnIndex) => (
          <TriangleGroup
            key={`${rowIndex}-${columnIndex}`}
            type={triangleType}
          />
        ))
      )}
    </Container>
  );
};

export default TriangleGrid;
